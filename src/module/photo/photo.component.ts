import {Component, OnInit} from '@angular/core';
import {JsonPlaceHolderService} from  '../../service/jsonplaceholder/jsonplaceholder.service';
import {RemoveSpacesPipe} from "../../pipe/removeSpaces.pipe";

@Component({
    moduleId: module.id,
    selector: 'photo',
    templateUrl: 'photo.component.html',
    styleUrls: ['photo.component.css'],
    providers: [JsonPlaceHolderService],
    pipes: [RemoveSpacesPipe],
})
export class PhotoComponent {
    photos: string[] = null;
    errorMessage;
    initalValue: number = 20;

    constructor(public jsonPlaceHolderService: JsonPlaceHolderService) {
        this.jsonPlaceHolderService = jsonPlaceHolderService;
    }

    ngOnInit(): void {

        this.getPhotos();
    }

    getPhotos(): any {

        this.jsonPlaceHolderService.getPhotos()
            .subscribe(
                result=>this.photos = result,
                error => this.errorMessage = <any>error
            )
    }

    loadMorePhotos() {

        this.initalValue += 10;
    }
}