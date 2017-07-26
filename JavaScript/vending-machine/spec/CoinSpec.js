describe( "Coins", function() {
    describe( "A NZ 10 cent coin", function() {
		var c10 = new Coin( "Cupro-nickel", 23.62, 5.66, 10 );
        it( "should be made from Cupro-nickel alloy", function() {
            expect( c10.alloy ).toEqual( "Cupro-nickel" );
        }); 
		it( "should have a diameter of 23.62mm", function() {
            expect( c10.diameter ).toEqual( 23.62 );
        }); 
		it( "should have a weight of 5.66g", function() {
            expect( c10.weight ).toEqual( 5.66 );
        }); 
		it( "should have a value of 10 cents", function() {
            expect( c10.value ).toEqual( 10 );
        }); 		
    });
        describe( "A NZ 50 cent coin", function() {
		var c50 = new Coin( "Cupro-nickel", 31.75, 13.61, 50 );
        it( "should be made from Cupro-nickel alloy", function() {
            expect( c50.alloy ).toEqual( "Cupro-nickel" );
        }); 
		it( "should have a diameter of 31.75mm", function() {
            expect( c50.diameter ).toEqual( 31.75 );
        }); 
		it( "should have a weight of 13.61g", function() {
            expect( c50.weight ).toEqual( 13.61 );
        }); 
		it( "should have a value of 50 cents", function() {
            expect( c50.value ).toEqual( 50 );
        }); 		
    });

});