import {Component} from "@angular/core";

@Component({
    selector:'home',
    template: `
        <div>I'm a Home Component</div>
        <widget-one></widget-one>
        <widget-two></widget-two>
    `
})
export class HomeComponent{}