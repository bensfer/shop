import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCategoria',
  pure: false
})
export class FilterCategoriaPipe implements PipeTransform {

  transform(items: any[], filter: Object): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter(item => item.categoria.indexOf(filter['categoria']) !== -1);
  }

}
