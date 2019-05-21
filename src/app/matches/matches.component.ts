import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component( {
	selector: 'app-matches',
	templateUrl: './matches.component.html',
	styleUrls: [ './matches.component.css' ],
	encapsulation: ViewEncapsulation.None
} )

export class MatchesComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	setDate( text: string ): string {
		const date: number = new Date().getDate();
		console.log( `${ text } - ${ date }${ this.nth( date ) }` );
		return `${ text } - ${ date }${ this.nth( date ) }`;
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
