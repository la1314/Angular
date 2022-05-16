import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(value: string, enMayuscular: boolean = true): string {
        return (enMayuscular) ? value.toUpperCase() : value.toLowerCase();

    }

}
