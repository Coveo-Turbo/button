import {
    Component,
    ComponentOptions,
    IComponentBindings,
    IFieldOption,
    IQueryResult,
    l,
    Utils,
} from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface IButtonOptions {
    link?: IFieldOption;
    textCaption?: string;
    shouldBeLocalized?: boolean;
    target?: string;
}

@lazyComponent
export class Button extends Component {
    static ID = 'Button';
    static options: IButtonOptions = {
        link: ComponentOptions.buildFieldOption({ defaultValue: '@syssource' }),
        textCaption: ComponentOptions.buildLocalizedStringOption({defaultValue: 'button'}),
        shouldBeLocalized: ComponentOptions.buildBooleanOption({ defaultValue: false }),
        target: ComponentOptions.buildStringOption({defaultValue: '_blank'}),
    };

    constructor(public element: HTMLElement, public options: IButtonOptions, public bindings: IComponentBindings, public result?: IQueryResult) {
        super(element, Button.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, Button, options);

        this.render();
    }

    protected getValue(field: IFieldOption): string {
        let value = Utils.getFieldValue(this.result, <string>field);
        if (!_.isArray(value) && _.isObject(value)) {
            value = '';
        }
        if (_.isArray(value)) {
            value = value.join(',');
        }
        return value;
    }

    protected render() {
        this.element.setAttribute('href', this.getValue(this.options.link));
        this.element.setAttribute('target', this.options.target);
        let textValue = this.options.textCaption;
        if (this.options.shouldBeLocalized) { textValue = l(textValue); }
        this.element.innerText = textValue;
    }
}