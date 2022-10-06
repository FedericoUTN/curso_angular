import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    let aux: string[] = value.trim().split(" ");
    let title: string = "";
    for(let palabra of aux){
      title = `${title} ${palabra[0].toUpperCase()}${palabra.substring(1).toLocaleLowerCase()}`
    }
    if(title){
      return title;
    }
    else return '';
    
    
    return null;
  }

}
