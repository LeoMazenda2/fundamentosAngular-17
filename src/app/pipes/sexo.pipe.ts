import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sexo'
})
export class SexoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let sexo = 'Masculino';

    if (value === 'F') {
      sexo = 'Feminino';
    }
    return sexo;
  }

}


// export class SexoPipe implements PipeTransform {

//   transform(value: string, ...args: unknown[]): string {
//     if (value.toLowerCase() === 'm') {
//       return 'Masculino';
//     } else if (value.toLowerCase() === 'f') {
//       return 'Feminino';
//     } else {
//       return 'Desconhecido';
//     }
//   }

// }