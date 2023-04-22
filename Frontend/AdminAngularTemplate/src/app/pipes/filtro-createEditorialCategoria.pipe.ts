import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filtroCreateEditorialCategoria'
})
export class FiltroCreateEditorialCategoria implements PipeTransform {
  
  /*transform(value: any, campo:string, args:string): unknown {
    if(!value)return null;
    if(!args)return value;
    return value.filter( (singleItem: { [x: string]: string; })  =>
      singleItem[campo].toLowerCase().includes(args.toLowerCase()));
  }*/

  transform(items: any[], searchText: number): any[] {
    
    if (!items) {
      return [{ '_blogtitulo': false }];
    }
    if (!searchText) {
      return items;
    }
    
    const searchResults = items.filter(item => item._categorie_id === searchText);  
    if(searchResults.length == 0){
      return [{ '_blogtitulo': false }];
    }
    
    return searchResults

  }
}
