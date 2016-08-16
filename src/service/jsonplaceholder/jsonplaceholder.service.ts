import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Constants} from '../../shared/constants';

@Injectable()
export class JsonPlaceHolderService {
    private http;

    constructor(http: Http) {
        this.http = http;
    }

    getPhotos(): any {

        return this.http.get(`${Constants.JsonPlaceHolderApiEndpoint}/photos`)
            .map((res: Response)=>res.json())
            .catch(this.handleError)
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}