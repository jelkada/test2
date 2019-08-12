import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskName',
  pure: false
})
export class TaskNamePipe implements PipeTransform {

  transform(value: any, str: string): any {
    const resultArray = [];
    for (const item of value) {
      // console.log('item: ' + item);
      if (item.indexOf(str) > -1) {
        resultArray.push(item);
      }
    }
    return resultArray;  }

}
