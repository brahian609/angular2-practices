import {Component} from '@angular/core';
@Component({
    selector: 'widget-two',
    styles:[`
        :host{
            display: block;
            border: 3px solid red;
        }
    `],
    template: `
        <h2>Header</h2>
        <ng-content select="[header]"></ng-content>
        <ng-content select="[content]"></ng-content>
        <ng-content select="[footer]"></ng-content>
        <h2>Footer</h2>
    `
})
export class WidgetTwo{}