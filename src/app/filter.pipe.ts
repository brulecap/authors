import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})

export class FilterPipe implements PipeTransform {
	transform(items: any[], fullName: string, year: number, country: string): any[] {
		if(!items) return [];
		if (!fullName && !year && !country) return items;
		return items.filter( it => {
			if (fullName) {
				let name = it.first_name + " " + it.last_name;
				if (name.toLowerCase().includes(fullName.toLowerCase())) {
					return it;
				}
			}
			if (year && (it.birthyear.toString().includes(year) || it.deathyear.toString().includes(year))) {
				return it;
			}
			if (country && it.country.toLowerCase().includes(country.toLowerCase())) {
				return it;
			}
		});
	}
}