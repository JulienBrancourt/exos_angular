import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'read',
  standalone: true
})
export class ReadPipe implements PipeTransform {

  transform(value: string, read: true | false): string {
    return read === true ? '👍' : '👎';
  }

}
