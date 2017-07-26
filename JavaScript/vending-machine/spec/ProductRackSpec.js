describe( "ProductRack", function() {
    describe( "An Product Rack to hold up to five $1.00 Pens", function() {
		var aProductRack = new ProductRack( 5, 100, 'Pen' );
        it( "should have a capacity of 5", function() {
            expect( aProductRack.capacity ).toEqual( 5 );
        }); 
        it( "should have a cost of 100 cents", function() {
            expect( aProductRack.cost ).toEqual( 100 );
        });
        it( "should have a description of 'Pen'", function() {
            expect( aProductRack.description ).toEqual( 'Pen' );
        });		
    });
});

/*
describe( "ProductRack", function() {
    describe( "An Product Rack to hold up to five $1.00 Pens", function() {
		var aProductRack = new ProductRack( 5, 100, 'Pen' );
        it( "should have a capacity of 5", function() {
            expect( aProductRack.capacity ).toEqual( 5 );
        }); 
        it( "should have a cost of 100 cents", function() {
            expect( aProductRack.cost ).toEqual( 100 );
        });
        it( "should have a description of 'Pen'", function() {
            expect( aProductRack.description ).toEqual( 'Pen' );
        });		
    });
});
*/