describe( "CoinsHolder", function() {
    describe( "An empty Coins-Holder", function() {
		var aCoinsHolder = new CoinsHolder();
        it( "should have a total of 0", function() {
            expect( aCoinsHolder.total ).toEqual( 0 );
        }); 
		it( "should have nothing in its collection of coins", function() {
            expect( aCoinsHolder.allMyCoinsArray.length ).toEqual( 0 );
        }); 
    });

	describe( "A Coins-Holder with one added 10 cent coin", function() {
		var aCoinsHolder = new CoinsHolder();
		aCoinsHolder.addCoin(  new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		it( "should have a total of 10", function() {
            expect( aCoinsHolder.total ).toEqual( 10 );
        }); 
		it( "should have 1 item in its collection of coins", function() {
            expect( aCoinsHolder.allMyCoinsArray.length ).toEqual( 1 );
        }); 
    });
	
	describe( "A Coins-Holder with and added 10c and 50c coin", function() {
		var aCoinsHolder = new CoinsHolder();
		aCoinsHolder.addCoin(  new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		aCoinsHolder.addCoin(  new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );		
		it( "should have a total of 70", function() {
            expect( aCoinsHolder.total ).toEqual( 60 );
        }); 
		it( "should have 2 item in its collection of coins", function() {
            expect( aCoinsHolder.allMyCoinsArray.length ).toEqual( 2 );
        }); 
		it( "should have a 10 cent coin as the first item", function() {
            expect( aCoinsHolder.allMyCoinsArray[ 0 ].value ).toEqual( 10 );
        }); 

		it( "should have a 50 cent coin the 2nd item", function() {
            expect( aCoinsHolder.allMyCoinsArray[ 1 ].value ).toEqual( 50 );
        }); 
		
    });

	describe( "A Coins-Holder with two added 10 cent coins, which is then emptied", function() {
		var aCoinsHolder = new CoinsHolder();
		aCoinsHolder.addCoin(  new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		aCoinsHolder.addCoin(  new Coin( "Cupro-nickel", 31.75, 13.61, 50 )  );
		var output = aCoinsHolder.empty();
		it( "should have a total of 0", function() {
            expect( aCoinsHolder.total ).toEqual( 0 );
        }); 
		it( "should have 0 item in its collection of coins", function() {
            expect( aCoinsHolder.allMyCoinsArray.length ).toEqual( 0 );
        }); 
		it( "should return an array", function() {
            expect( output.constructor ).toEqual( Array );
        });
		it( "with 2 items in it", function() {
            expect( output.length ).toEqual( 2 );
        });
		it( "should have a 10 cent coin as the first item", function() {
            expect( output[ 0 ].value ).toEqual( 10 );
        }); 
		it( "should have a 50 cent coin as the first item", function() {
            expect( output[ 1 ].value ).toEqual( 50 );
        }); 
	});	
	
});