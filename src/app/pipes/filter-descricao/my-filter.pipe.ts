import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDescricao',
  pure: false
})
export class FilterDescricaoPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.descricao.indexOf(filter['descricao']) !== -1);
  }
}
