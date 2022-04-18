import { Pipe, PipeTransform } from '@angular/core';
import { OptionData } from './ngx-selects.interface';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: OptionData[], text: string): OptionData[] {
    if (!data || !text) {
      return data;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return data.filter((item: OptionData) => item.text.toLowerCase().indexOf(text) > -1);
  }

}
