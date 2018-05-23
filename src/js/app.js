class GulpTest {
	constructor( user = 'there' ) {
		this.message = 'Hi ' + user + ', Thanks for using Gulp SASS Babel!';
		this.hi();
	}
	hi() {
		alert( this.message );
	}
}

new GulpTest();