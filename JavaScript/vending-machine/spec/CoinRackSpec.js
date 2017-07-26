describe( "CoinRack", function() {
    describe( "A new Coin Rack to hold up to five 50c coins", function() {
		var aCoinRack = new CoinRack( 5, 50 );

        it( "should have a capacity of 5", function() {
            expect( aCoinRack.capacity ).toEqual( 5 );
        }); 

        it( "should have a coin value of 50 cents", function() {
            expect( aCoinRack.coinValue ).toEqual( 50 );
        });
    });
	
	describe( "Adding three 50 cent coins to a new Coin Rack able to hold up to five 50c coins", function() {
		var aCoinRack = new CoinRack( 5, 50 );
		aCoinRack.addCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		aCoinRack.addCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		aCoinRack.addCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
        it( "should have 3 available coins", function() {
            expect( aCoinRack.countOfAvailableCoins() ).toEqual( 3 );
        }); 
        it( "should have a total of 150", function() {
            expect( aCoinRack.getTotal() ).toEqual( 150 );
        });

    });

	describe( "Adding THREE 50 cent coins to a new Coin Rack able to hold up to TWO 50c coins", function() {
		var aCoinRack, result;
		aCoinRack = new CoinRack( 2, 50 );
        it( "coin 1 accepted", function() {
			result = aCoinRack.addCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
            expect( result ).toEqual( null );
        }); 
		it( "coin 2 accepted", function() {
			result = aCoinRack.addCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
            expect( result ).toEqual( null );
        }); 
		it( "coin 3 returned", function() {
			var theCoin = new Coin( "Cupro-nickel", 31.75, 13.61, 50 );
			result = aCoinRack.addCoin( theCoin );
            expect( result ).toEqual( theCoin );
        }); 
	});

	describe( "Adding a 10 cent coin to a new Coin Rack able to hold up to TWO 50c coins", function() {
		var aCoinRack, result, theCoin;
		aCoinRack = new CoinRack( 2, 50 );
		theCoin = new Coin( "Cupro-nickel", 23.62, 5.66, 10 );
        it( "coin rejected, nothing goes into Coin Rack ", function() {
			result = aCoinRack.addCoin( theCoin );
            expect( result ).toEqual( theCoin );
			expect( aCoinRack.countOfAvailableCoins() ).toEqual( 0 );
			expect( aCoinRack.getTotal() ).toEqual( 0 );
			expect( aCoinRack.allMyCoins ).toEqual( [] );
        }); 

	});
	
	
	
});