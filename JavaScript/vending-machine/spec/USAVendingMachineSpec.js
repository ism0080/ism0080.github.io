describe( "USA Vending machine", function() {
	var theVendingMachine = new VendingMachine( );
	
	describe( "six coin racks ", function() {
		theVendingMachine.addCoinRack( 3, 1 );
		theVendingMachine.addCoinRack( 3, 5 );
		theVendingMachine.addCoinRack( 3, 10 );
		theVendingMachine.addCoinRack( 3, 25 );
		theVendingMachine.addCoinRack( 3, 50 );
		theVendingMachine.addCoinRack( 3, 100 );
        it( "should have six coin racks", function() {
            expect( theVendingMachine.allMyCoinRacks.length ).toEqual( 6 );
        });	
        it( "One for THREE 1 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 0 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 1 );
        });	
        it( "One for THREE 5 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 1 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 5 );
        });	
		it( "One for THREE 10 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 2 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 10 );
        });	
		it( "One for THREE 25 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 3 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 25 );
        });	
		it( "One for THREE 50 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 4 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 50 );
        });	
		it( "One for THREE 100 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 5 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 100 );
        });	
		
	
	
		describe( "Change of 1, 1, 1, 5, 5, 5, 10, 10, 10, 25, 25, 25, 50, 50, 50, 100, 100, 100 ", function() {
			// 1 cents * THREE
			theVendingMachine.addChange( new Coin( "Copper Plated Zinc", 19.05, 2.5, 1 ) );
			theVendingMachine.addChange( new Coin( "Copper Plated Zinc", 19.05, 2.5, 1 ) );
			theVendingMachine.addChange( new Coin( "Copper Plated Zinc", 19.05, 2.5, 1 ) );
			// 5 cents  * THREE
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 21.21, 5, 5 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 21.21, 5, 5 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 21.21, 5, 5 ) );
			// 10 cents  * THREE
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 17.91, 2.27, 10 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 17.91, 2.27, 10 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 17.91, 2.27, 10 ) );
			// 25 cents  * THREE
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 24.26, 5.67, 25 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 24.26, 5.67, 25 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 24.26, 5.67, 25 ) );
			// 50 cents  * THREE
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 30.61, 11.34, 50 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 30.61, 11.34, 50 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 30.61, 11.34, 50 ) );
			// 100 cents  * THREE
			theVendingMachine.addChange( new Coin( "Manganese-brass", 26.49, 8.1, 100 ) );
			theVendingMachine.addChange( new Coin( "Manganese-brass", 26.49, 8.1, 100 ) );
			theVendingMachine.addChange( new Coin( "Manganese-brass", 26.49, 8.1, 100 ) );
			
			it( "should have a totalAmount of 573", function() {
				expect( theVendingMachine.totalChangeAmount ).toEqual( 573 );
			});
			
			it( "has a first coin rack holding three * 1 = 3 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 0 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 1 );
			});
			
			it( "has a second coin rack holding three * 5 = 15 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 1 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 5 );
			});
			it( "has a third coin rack holding three * 10 = 30 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 2 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 10 );
			});

			it( "has a fourth coin rack holding three * 25 = 75 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 3 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 25 );
			});

			it( "has a fifth coin rack holding three * 50 = 150 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 4 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 50 );
			});
			it( "has a fifth coin rack holding three * 100 = 300 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 5 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 100 );
			});



		})
    });
});
