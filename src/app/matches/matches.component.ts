import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component( {
	selector: 'app-matches',
	templateUrl: './matches.component.html',
	styleUrls: [ './matches.component.css' ],
	encapsulation: ViewEncapsulation.None
} )

export class MatchesComponent implements OnInit {

	daysOfWeek: string[] = [];

	constructor() { }

	ngOnInit() {
		this.daysOfWeek = this.generateDates();
	}

	generateDates(): string[] {
		const daysOfWeek = [];
		for ( let i = 0; i < 7; i++ ) {
			const date: Date = new Date();
			const day = date.getDate() + i;
			const options = { weekday: 'long', month: 'long', day: 'numeric' };

			date.setDate( day );
			daysOfWeek.push( date.toLocaleDateString( 'en-GB', options ) );
		}
		return daysOfWeek;
	}

	nth( date: number ): string {
		if ( date > 3 && date < 21 ) { return 'th'; }
		switch ( date %  10 ) {
			case 1:		return 'st';
			case 2:		return 'nd';
			case 3:		return 'rd';
			default:	return 'th';
		}
	}
}
