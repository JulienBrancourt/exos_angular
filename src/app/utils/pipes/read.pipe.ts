import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'read',
  standalone: true
})
export class ReadPipe implements PipeTransform {

  transform(bool: boolean): string {
    return bool === true ? '👍' : '👎';
  }

}
