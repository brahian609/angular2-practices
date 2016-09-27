import {Component} from "@angular/core";
import {SimpleService} from "../services/services.module";

@Component({
    selector:'home',
    template: `
        <div>I'm a Home Component</div>
        <div>{{simpleService.message}}</div>
        <widget-one [message]="simpleService.message"></widget-one>
        <widget-one [message]="'Hola mundo'"></widget-one>
    `
})
export class HomeComponent{
    constructor(private simpleService:SimpleService){}
}