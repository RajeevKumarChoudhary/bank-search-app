import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        if (!items) return [];
        if (!searchText) return items;
        searchText = searchText.toLowerCase();
        return items.filter(it => {
            if (it.ifsc.toLowerCase().includes(searchText)) {
                return true;
            }
            if (it.branch.toLowerCase().includes(searchText)) {
                return true;
            }
            if (it.address.toLowerCase().includes(searchText)) {
                return true;
            }
            if (it.city.toLowerCase().includes(searchText)) {
                return true;
            }
            if (it.district.toLowerCase().includes(searchText)) {
                return true;
            }
            if (it.state.toLowerCase().includes(searchText)) {
                return true;
            }
            if (it.bank_name.toLowerCase().includes(searchText)) {
                return true;
            }
        });
    }
}