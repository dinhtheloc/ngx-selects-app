import { Pipe, PipeTransform } from '@angular/core';
import { OptionData } from '../component/ngx-selects/ngx-selects.interface';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: OptionData[], text: string): OptionData[] {
    if (!data || !text) {
      return data;
    }
    return data.filter((item: OptionData) => item.text.toLowerCase().indexOf(text) > -1);
  }

}
