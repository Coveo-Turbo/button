import { Component, IComponentBindings, ComponentOptions } from 'coveo-search-ui';
import { lazyComponent } from '@coveops/turbo-core';

export interface IButtonOptions {}

@lazyComponent
export class Button extends Component {
    static ID = 'Button';
    static options: IButtonOptions = {};

    constructor(public element: HTMLElement, public options: IButtonOptions, public bindings: IComponentBindings) {
        super(element, Button.ID, bindings);
        this.options = ComponentOptions.initComponentOptions(element, Button, options);
    }
}