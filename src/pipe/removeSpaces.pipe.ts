import {PipeTransform, Pipe} from "@angular/core";

@Pipe({name: "removeSpace"})
export class RemoveSpacesPipe implements PipeTransform {

    transform(value: any, args: any): any {

        return value.replace(/ /g, "");
    }


}