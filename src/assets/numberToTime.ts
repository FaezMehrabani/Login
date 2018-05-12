import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

    transform(value: number): any {
       const minutes: number = Math.floor(value / 60);
       return { min : minutes , sec: (value - minutes * 60)};
    }

}