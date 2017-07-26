describe( "NZ Vending machine", function() {
	var theVendingMachine = new VendingMachine( );
	
	describe( "five coin racks ", function() {
		theVendingMachine.addCoinRack( 3, 10 );
		theVendingMachine.addCoinRack( 3, 20 );
		theVendingMachine.addCoinRack( 3, 50 );
		theVendingMachine.addCoinRack( 3, 100 );
		theVendingMachine.addCoinRack( 3, 200 );
        it( "should have five coin racks", function() {
            expect( theVendingMachine.allMyCoinRacks.length ).toEqual( 5 );
        });	
        it( "One for THREE 10 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 0 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 10 );
        });	
        it( "One for THREE 20 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 1 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 20 );
        });	
		it( "One for THREE 50 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 2 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 50 );
        });	
		it( "One for THREE 100 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 3 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 100 );
        });	
		it( "One for THREE 200 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 4 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 200 );
        });	
		
	
	
		describe( "Change of 10, 10, 10, 20, 20, 20, 50, 50, 50, 100, 100, 100, 200, 200, 200 ", function() {
			// 10 cents * THREE
			theVendingMachine.addChange( new Coin( "Copper Plated Steel", 20.5, 3.31, 10 ) );
			theVendingMachine.addChange( new Coin( "Copper Plated Steel", 20.5, 3.31, 10 ) ); 
			theVendingMachine.addChange( new Coin( "Copper Plated Steel", 20.5, 3.31, 10 ) ); 
			// 20 cents  * THREE
			theVendingMachine.addChange( new Coin( "Nickel Plated Steel", 21.75, 4.12, 20 ) );
			theVendingMachine.addChange( new Coin( "Nickel Plated Steel", 21.75, 4.12, 20 ) );
			theVendingMachine.addChange( new Coin( "Nickel Plated Steel", 21.75, 4.12, 20 ) );
			// 50 cents  * THREE
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 24.75, 5.15, 50 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 24.75, 5.15, 50 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 24.75, 5.15, 50 ) );
			// 100 cents  * THREE
			theVendingMachine.addChange( new Coin( "Alluminuim Bronze", 23, 8, 100 ) );
			theVendingMachine.addChange( new Coin( "Alluminuim Bronze", 23, 8, 100 ) );
			theVendingMachine.addChange( new Coin( "Alluminuim Bronze", 23, 8, 100 ) );
			// 200 cents  * THREE
			theVendingMachine.addChange( new Coin( "Alluminuim Bronze", 26.5, 10, 200 ) );
			theVendingMachine.addChange( new Coin( "Alluminuim Bronze", 26.5, 10, 200 ) );
			theVendingMachine.addChange( new Coin( "Alluminuim Bronze", 26.5, 10, 200 ) );
			
			it( "should have a totalAmount of 1140", function() {
				expect( theVendingMachine.totalChangeAmount ).toEqual( 1140 );
			});
			
			it( "has a first coin rack holding three * 10 = 30 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 0 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 10 );
			});
			
			it( "has a second coin rack holding three * 20 = 60 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 1 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 20 );
			});
			it( "has a third coin rack holding three * 50 = 150 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 2 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 50 );
			});

			it( "has a fourth coin rack holding three * 100 = 300 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 3 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 100 );
			});

			it( "has a fifth coin rack holding three * 200 = 600 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 4 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 200 );
			});



		})
    });
});
