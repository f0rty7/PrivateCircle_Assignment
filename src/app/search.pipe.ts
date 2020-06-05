import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value, args) {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter((item) =>
      JSON.stringify(item.list_names).toLowerCase().includes(args)
    );
  }
}
