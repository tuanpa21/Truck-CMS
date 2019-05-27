import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterList'
})
export class FilterListPipe implements PipeTransform {

  transform(value: any, filterKey: string): any {
    if (filterKey) {
      return value.filter(item => {
        console.log(item);
        for (const key of Object.keys(item)) {
          console.log(item[key]);
          if (item[key].toString().indexOf(filterKey) > -1) {
            return item;
          }
        }
      });
    }
    return value;
  }

}
