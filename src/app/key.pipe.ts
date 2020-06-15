import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'key'
})
export class KeyPipe implements PipeTransform {
  transform (value: { key: string, location: number }): string {
    return `${value.key} (${value.location})`
  }
}
