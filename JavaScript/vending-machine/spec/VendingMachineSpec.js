describe( "Vending machine", function() {
	var theVendingMachine = new VendingMachine( );
	
	describe( "two coin racks ", function() {
		theVendingMachine.addCoinRack( 3, 10 );
		theVendingMachine.addCoinRack( 3, 50 );
        it( "should have a two coin racks", function() {
            expect( theVendingMachine.allMyCoinRacks.length ).toEqual( 2 );
        });	
        it( "One for THREE 10 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 0 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 10 );
        });	
        it( "One for THREE 50 cent coins", function() {
			var aCoinRack = theVendingMachine.allMyCoinRacks[ 1 ];
            expect( aCoinRack.capacity ).toEqual( 3 );
			expect( aCoinRack.coinValue ).toEqual( 50 );
        });	
		
	
	
		describe( "Change of 10, 10, 10, 50, 50, 50 ", function() {
			// 50 cents * THREE
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
			// 10 cents  * THREE
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
			theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
			
			it( "should have a totalAmount of 180", function() {
				expect( theVendingMachine.totalChangeAmount ).toEqual( 180 );
			});
			
			it( "has a first coin rack holding three * 10 = 30 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 0 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 10 );
			});
			
			it( "has a second coin rack holding three * 10 = 30 cents.", function() {
				var aCoinRack = theVendingMachine.allMyCoinRacks[ 1 ];
				expect( aCoinRack.allMyCoins.length ).toEqual( 3 );
				expect( aCoinRack.allMyCoins[0].value ).toEqual( 50 );
			});

		})
    });
	
	// this bit makes the product racks
	describe( "two product racks ", function() {
		theVendingMachine.addProductRack( 3, 100, 'Chocolate' );
		theVendingMachine.addProductRack( 3, 200, 'BIG Chocolate' );
        it( "should have a two product racks", function() {
            expect( theVendingMachine.allMyProductRacks.length ).toEqual( 2 );
        });	
        it( "One for THREE 100 cent Chocolate", function() {
			var aProductRack = theVendingMachine.allMyProductRacks[ 0 ];
            expect( aProductRack.capacity ).toEqual( 3 );
			expect( aProductRack.cost ).toEqual( 100 );
			expect( aProductRack.description ).toEqual( 'Chocolate' );
        });	
         it( "One for THREE 200 cent BIG Chocolate", function() {
			var aProductRack = theVendingMachine.allMyProductRacks[ 1 ];
            expect( aProductRack.capacity ).toEqual( 3 );
			expect( aProductRack.cost ).toEqual( 200 );
			expect( aProductRack.description ).toEqual( 'BIG Chocolate' );
	});
	
	// adds the products to the product racks
		describe( "Products added: Chocolate, BIG Chocolate, BIG Chocolate, BIG Chocolate, Chocolate.", function() {
			theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
			theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
			theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
			theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
			theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );

			it( " Should have a totalProductAmount of 800", function() {
				expect( theVendingMachine.totalProductAmount ).toEqual( 800 );
			});
			
			it( " Has a first product rack holding two Chocolates", function() {
				var aProductRack = theVendingMachine.allMyProductRacks[ 0 ];
				expect( aProductRack.allMyProducts.length ).toEqual( 2 );
				expect( aProductRack.allMyProducts[0].description ).toEqual( 'Chocolate' );
			});
			
			it( " Has a second product rack holding three BIG Chocolates", function() {
				var aProductRack = theVendingMachine.allMyProductRacks[ 1 ];
				expect( aProductRack.allMyProducts.length ).toEqual( 3 );
				expect( aProductRack.allMyProducts[0].description ).toEqual( 'BIG Chocolate' );
			});
		})
    });

});

