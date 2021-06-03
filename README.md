# Button

Disclaimer: This component was built by the community at large and is not an official Coveo JSUI Component. Use this component at your own risk.

## Getting Started

1. Install the component into your project.

```
npm i @coveops/button
```

2. Use the Component or extend it

Typescript:

```javascript
import { Button, IButtonOptions } from '@coveops/button';
```

Javascript

```javascript
const Button = require('@coveops/button').Button;
```

3. You can also expose the component alongside other components being built in your project.

```javascript
export * from '@coveops/button'
```

4. Or for quick testing, you can add the script from unpkg

```html
<script src="https://unpkg.com/@coveops/button@latest/dist/index.min.js"></script>
```

> Disclaimer: Unpkg should be used for testing but not for production.

5. Include the component in your template as follows:

Place the component in your markup:

```html
<div class="CoveoButton"></div>
```

## Options

The following options can be configured:

|       Option        | Required |  Type   |          Default           |                             Notes                                                                                   |
| ------------------- | -------- | ------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `target`            | No       | string  | `_target`                 | Specifies how to interact with the link. Valid values are one of the following: `_blank`, `_self`, `_parent`, `_top`, `framename`. |
| `textCaption`       | No       | string  | `button`                   | Specifies the value of the button.                                                                                  |
| `shouldBeLocalized` | No       | boolean | `false`                    | Specifies whether to translate the button value.                                                                    |
| `link`              | No       | field   | `@syssource`               | Specifies the field to use to create the link.                                                                      |


## Extending

Extending the component can be done as follows:

```javascript
import { Button, IButtonOptions } from "@coveops/button";

export interface IExtendedButtonOptions extends IButtonOptions {}

export class ExtendedButton extends Button {}
```

## Contribute

1. Clone the project
2. Copy `.env.dist` to `.env` and update the COVEO_ORG_ID and COVEO_TOKEN fields in the `.env` file to use your Coveo credentials and SERVER_PORT to configure the port of the sandbox - it will use 8080 by default.
3. Build the code base: `npm run build`
4. Serve the sandbox for live development `npm run serve`