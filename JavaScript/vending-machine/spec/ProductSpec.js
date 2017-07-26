describe( "Products", function() {
    describe( "A pen selling for $1.00", function() {
		var pen = new Product( "Pen", 100 );
        it( "should have a description of 'Pen'", function() {
            expect( pen.description ).toEqual( "Pen" );
        }); 
		it( "should cost 100 cents", function() {
            expect( pen.cost ).toEqual( 100 );
        }); 
    });

	describe( "Chocolate selling for $2.00", function() {
		var munchie = new Product( "Chocolate", 200 );
        it( "should have a description of 'Chocolate'", function() {
            expect( munchie.description ).toEqual( "Chocolate" );
        }); 
		it( "should cost 200 cents", function() {
            expect( munchie.cost ).toEqual( 200 );
        }); 
    });

});