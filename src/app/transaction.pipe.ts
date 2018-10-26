import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "transaction"
})
export class TransactionPipe implements PipeTransform {
  transform(collection: any[], field: string, value: string): any[] {
    if (!collection) {
      return [];
    }
    if (!field || !value) {
      return collection;
    }
    return collection.filter(item => item[field].includes(value));
  }
}
