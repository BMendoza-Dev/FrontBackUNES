import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroCuentas'
})
export class FiltroCuentasPipe implements PipeTransform {
  
  /*transform(value: any, campo:string, args:string): unknown {
    if(!value)return null;
    if(!args)return value;
    return value.filter( (singleItem: { [x: string]: string; })  =>
      singleItem[campo].toLowerCase().includes(args.toLowerCase()));
  }*/

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return item.name.toLowerCase().includes(searchText);
    });
  }
}
