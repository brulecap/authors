import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})

export class FilterPipe implements PipeTransform {
	transform(items: any[], searchText: string): any[] {
		if(!items) return [];
		if(!searchText) return items;		
		return items.filter( it => {
			let name = it.first_name + " " + it.last_name;
			if (name.toLowerCase().includes(searchText) || 
				it.country.toLowerCase().includes(searchText)) {
				return it;
			}
		});
	}
}