import {Component} from '@angular/core';
import {LoginComponent} from './module/login/index';
import {PhotoComponent} from "./module/photo/photo.component";

@Component({
    moduleId: module.id,
    selector: 'starter',
    templateUrl: 'app.component.html',
    directives: [LoginComponent,PhotoComponent]
})
export class AppComponent {
}