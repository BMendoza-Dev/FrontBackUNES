import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroCategorias'
})
export class FiltroCategoriasPipe implements PipeTransform {
  
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
    const filteredItems = items.filter((item:any) => {
      return Object.values(item).some((val:any) => {
        if (val === null) {
          return false;
        }
        return val.toString().toLowerCase().includes(searchText);
      });
    });

    if (filteredItems.length === 0) {
      return [{ 'validar': 'Sin registros' }];
    }
    return filteredItems;
  }
}
