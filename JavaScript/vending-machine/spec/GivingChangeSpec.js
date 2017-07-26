describe( "TESTS OF GIVING CHANGE", function() {
	'use strict'
	describe( "100 cents inserted and 100 cent product selected", function() {
/*
		theVendingMachine.addCoinRack( 3, 10 );
		theVendingMachine.addCoinRack( 3, 50 );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );

		theVendingMachine.addProductRack( 3, 100, 'Chocolate' );
		theVendingMachine.addProductRack( 3, 200, 'BIG Chocolate' );
		
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
	*/
 
/*		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.selectProduct( 0 );
		theVendingMachine.calcChange();
	*/	
		var theVendingMachine;
			beforeEach( function() {
				theVendingMachine = new VendingMachine( );
		
		theVendingMachine.addCoinRack( 3, 10 );
		theVendingMachine.addCoinRack( 3, 50 );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );

		theVendingMachine.addProductRack( 3, 100, 'Chocolate' );
		theVendingMachine.addProductRack( 3, 200, 'BIG Chocolate' );
		
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
	
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.selectProduct( 0 );
		theVendingMachine.calcChange();		
	});		
		it( "should accept the deposit", function() {
			expect( theVendingMachine.theDeposit ).toEqual( 100 );
		});
		
		it( "should vend the right product", function() {
			var aProduct = theVendingMachine.mySelectedProductRack;
			expect( aProduct.description ).toEqual( 'Chocolate' );
		});
		
		it( "should have 100 cents in deposits", function() {
			expect( theVendingMachine.theDeposit ).toEqual( 100 );
		});
		
		it( "should have two Chocolate product left", function() {
			var aProduct = theVendingMachine.vendProduct()
			expect( theVendingMachine.mySelectedProductRack.allMyProducts.length ).toEqual( 2 );
		});
		
		it( "should have 800 cents of products remaining", function() {
			var aProduct = theVendingMachine.vendProduct()
			expect( theVendingMachine.totalProductAmount ).toEqual( 800 );
		});
	});

		
	describe( "200 cents inserted and 200 cent product selected", function() {   
	
			var theVendingMachine;
			beforeEach( function() {
				theVendingMachine = new VendingMachine( );
		
		theVendingMachine.addCoinRack( 3, 10 );
		theVendingMachine.addCoinRack( 3, 50 );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );

		theVendingMachine.addProductRack( 3, 100, 'Chocolate' );
		theVendingMachine.addProductRack( 3, 200, 'BIG Chocolate' );
		
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
	
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.selectProduct( 1 );
		theVendingMachine.calcChange();		
	});		
		
		it( "should accept the deposit", function() {
			expect( theVendingMachine.theDeposit ).toEqual( 200 );
		});
		
		it( "should vend the right product", function() {
			var aProduct = theVendingMachine.mySelectedProductRack;
			expect( aProduct.description ).toEqual( 'BIG Chocolate' );
		});
		
		it( "should have 200 cents in deposits", function() {
			expect( theVendingMachine.theDeposit ).toEqual( 200 );
		});
		
		it( "should have two Big Chocolate product left", function() {
			var aProduct = theVendingMachine.vendProduct()
			expect( theVendingMachine.mySelectedProductRack.allMyProducts.length ).toEqual( 2 );
		});
		
		it( "should have 600 cents of products remaining", function() {
			var aProduct = theVendingMachine.vendProduct()
			expect( theVendingMachine.totalProductAmount ).toEqual( 600 );
		});

	});
	
	describe( "150 cents inserted and 100 cent product selected", function() {   
		var theVendingMachine;
			beforeEach( function() {
				theVendingMachine = new VendingMachine( );
		
		theVendingMachine.addCoinRack( 3, 10 );
		theVendingMachine.addCoinRack( 3, 50 );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );

		theVendingMachine.addProductRack( 3, 100, 'Chocolate' );
		theVendingMachine.addProductRack( 3, 200, 'BIG Chocolate' );
		
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
	
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.selectProduct( 0 );
		theVendingMachine.calcChange();		
	});	

		it( "should accept the deposit", function() {
			expect( theVendingMachine.theDeposit ).toEqual( 150 );
		});
		
		it( "should vend the right product", function() {
			var aProduct = theVendingMachine.mySelectedProductRack;
			expect( aProduct.description ).toEqual( 'Chocolate' );
		});
		
		it( "should have 150 cents in deposits", function() {
			expect( theVendingMachine.theDeposit ).toEqual( 150 );
		});
		
		it( "should have one Chocolate product left", function() {
			var aProduct = theVendingMachine.vendProduct()
			expect( theVendingMachine.mySelectedProductRack.allMyProducts.length ).toEqual( 1 );
		});
		
		it( "should have 500 cents of products remaining", function() {
			var aProduct = theVendingMachine.vendProduct()
			expect( theVendingMachine.totalProductAmount ).toEqual( 500 );
		});
		
		it( "should return 50 cents change", function() {
			expect( theVendingMachine.refund ).toEqual( 50 );
		});
	});
	
	describe( "110 cents inserted and 100 cent product selected", function() {   
		var theVendingMachine;
			beforeEach( function() {
				theVendingMachine = new VendingMachine( );
		
		theVendingMachine.addCoinRack( 3, 10 );
		theVendingMachine.addCoinRack( 3, 50 );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );

		theVendingMachine.addProductRack( 3, 100, 'Chocolate' );
		theVendingMachine.addProductRack( 3, 200, 'BIG Chocolate' );
		
		theVendingMachine.addProduct( new Product( 'Chocolate', 100 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
	
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.selectProduct( 0 );
		theVendingMachine.calcChange();		
	});	

		it( "should accept the deposit", function() {
			expect( theVendingMachine.theDeposit ).toEqual( 110 );
		});
		
		it( "should vend the right product", function() {
			var aProduct = theVendingMachine.mySelectedProductRack;
			expect( aProduct.description ).toEqual( 'Chocolate' );
		});
		
		it( "should have 110 cents in deposits", function() {
			expect( theVendingMachine.theDeposit ).toEqual( 110 );
		});
		
		it( "should have zero Chocolate product left", function() {
			var aProduct = theVendingMachine.vendProduct()
			expect( theVendingMachine.mySelectedProductRack.allMyProducts.length ).toEqual( 0 );
		});
		
		it( "should have 400 cents of products remaining", function() {
			var aProduct = theVendingMachine.vendProduct()
			expect( theVendingMachine.totalProductAmount ).toEqual( 400 );
		});
		
		it( "should return 10 cents change", function() {
			expect( theVendingMachine.refund ).toEqual( 10 );
		});
	});
	
	describe( "110 cents inserted and 100 cent product selected", function() {   
			var theVendingMachine;
			beforeEach( function() {
				theVendingMachine = new VendingMachine( );
		
		theVendingMachine.addCoinRack( 3, 10 );
		theVendingMachine.addCoinRack( 3, 50 );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );

		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.addChange( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );

		theVendingMachine.addProductRack( 3, 100, 'Chocolate' );
		theVendingMachine.addProductRack( 3, 200, 'BIG Chocolate' );
		
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
		theVendingMachine.addProduct( new Product( 'BIG Chocolate', 200 ) );
	
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 31.75, 13.61, 50 ) );
		theVendingMachine.insertCoin( new Coin( "Cupro-nickel", 23.62, 5.66, 10 ) );
		theVendingMachine.selectProduct( 0 );
		theVendingMachine.calcChange();		
	});	

	
		it( "should accept the deposit", function() {
			expect( theVendingMachine.theDeposit ).toEqual( 110 );
		});
		
		it( "can't vend 100 cent product - none left to vend", function() {
			var aProduct = theVendingMachine.mySelectedProductRack;
			expect( aProduct.length ).toEqual( undefined );
		});
		
		it( "should full refund", function() {
			expect( theVendingMachine.returnAllFunds() ).toEqual( 110 );
		});
	});
	
});