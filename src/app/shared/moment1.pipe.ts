import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment'

@Pipe({
  name: 'moment1',
  pure: false
})
export class Moment1Pipe implements PipeTransform {
  transform(m: moment.Moment | null, format: string = 'MMMM YYYY'): string {
    return  m ? m.format(format): ''
  }
}