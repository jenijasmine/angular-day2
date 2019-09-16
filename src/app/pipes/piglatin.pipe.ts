import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'piglatin'
})
export class PiglatinPipe implements PipeTransform {

  transform(inputString: string, ...args: any[]): string {

    //traditional approach
  //   if(!inputString) {return '';}
  //   const words = inputString.trim().split(' ');
  //   for(let i=0;i <words.length; ++i){
  //    // if(!words[i]) {continue;}
  //     words[i]= words[i].slice(1) + words[i][0]+'a';
  //   }
  //   return words.join(' ');


  //smart approach
  return inputString.trim().split(' ').map(w=>w.slice(1)+w[0]+'a').join(' ');
    }

}
