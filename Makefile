#!make
include .env
export

default:	| setup build

init:
	cp .env .env.dist

setup:
	npm install

build:
	npm run build

watch:
	npm run watch

serve:
	./node_modules/.bin/coveops serve \
		--org-id $(COVEO_ORG_ID) \
		--token $(COVEO_TOKEN) \
		--port $(SERVER_PORT)

pack: 
	npm pack

publish:
	npm publish --access public

releasePatch: releaseBranch npmPatch mergeRelease tag publish reconcileDevelop

releaseMinor: releaseBranch npmMinor mergeRelease tag publish reconcileDevelop

releaseMajor: releaseBranch npmMajor mergeRelease tag publish reconcileDevelop

npmPatch:
	npm version patch

npmMinor:
	npm version minor

npmMajor:
	npm version major

latestTag:
	git fetch --prune --prune-tags && \
	git tag --sort=-v:refname | head -n 1

releaseBranch:
	git checkout develop && \
	git pull && \
	git checkout -tb release/latest && \
	git push origin HEAD

mergeRelease:
	git fetch origin && \
	git checkout master && \
	git merge release/latest && \
	git branch -D release/latest && \
	git push origin --delete release/latest && \
	git push origin master;

reconcileDevelop:
	git fetch origin && \
	git checkout develop && \
	git merge master && \
	git push origin develop;

tag:
	git tag $(shell git tag --sort=-v:refname | head -n 1 | sed 's/v//g') && git push origin --tags;

	
.PHONY: default init setup build serve pack publish