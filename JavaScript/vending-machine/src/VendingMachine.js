var VendingMachine = function () {
	this.allMyCoinRacks	= [];
	this.allMyProductRacks	= [];
	this.myCoinEjector	= new CoinsHolder();
	this.myDepositedCoinsHolder	= new CoinsHolder();
	this.mySelectedProductRack	= null;
	this.theDeposit	= null; // originally null, defect?
	this.totalChangeAmount = 0;
	this.totalProductAmount = 0;
	this.refund = 0;
};


VendingMachine.prototype.addCoinRack = function ( newCapacity, newValue   ) {
	/* 
	    FACADE METHOD 
	    Creates a new and empty change holder. 
	    A Change holder only accepts coins of a set value 
	    and will not accept more than a certain amount of coins. 
	*/ 
	var newCoinRack = new CoinRack( newCapacity, newValue  ); 
	this.allMyCoinRacks.push( newCoinRack ); 

};
	

VendingMachine.prototype.addChange = function ( newCoin ) {
	/* 
	    FACADE METHOD 
	    Find the first Changeholder of appropriate value that can take more 
	    and put coin coin into it 
	   
	    Increments total amount of change in vendingMachine 
	*/ 
	var coinRack, result;
	for ( coinRack of this.allMyCoinRacks ) {
		result = coinRack.addCoin( newCoin );
		if ( result === null ) { 
	        this.totalChangeAmount += newCoin.value; 
	        break; 
	    }
	}
	return result;
};

VendingMachine.prototype.addProductRack = function ( capacity, newValue, newDescription ) {
	/* 
	    FACADE METHOD 
	    Creates a new and empty holder of products. 
	    A ProductRack only accepts products which  
	        match the description 
	        and are of the designatged value. 
	    and will not accept more than a certain amount of product. 
	*/ 
	//var newProductRack = new ProductRack( newDescription, newValue, capacity ); 
	var newProductRack = new ProductRack(capacity, newValue, newDescription );
	this.allMyProductRacks.push( newProductRack ); 
};
    
		
VendingMachine.prototype.addProduct = function ( newProduct ) {
	/* 
	    FACADE METHOD 
	    find the first ProductRack of appropriate value that can take more 
	    and put the product into it 
	 
	  Increment total amount of that Product in vendingmachine 
	*/ 
	var productRack, result;
	result = false; 
	for ( productRack of this.allMyProductRacks ) {
	    if ( productRack.addProduct( newProduct ) === true ) {
			result = true; 
	        this.totalProductAmount += newProduct.cost; 
	        break; 
	    }
	}
	return result; 
};


VendingMachine.prototype.insertCoin = function ( aCoin ) {
	this.myDepositedCoinsHolder.addCoin(aCoin);
	this.theDeposit += aCoin.value;
};

VendingMachine.prototype.selectProduct = function ( theProductRackPosition ) {
	this.mySelectedProductRack = this.allMyProductRacks[theProductRackPosition];
};

VendingMachine.prototype.calcChange = function () {
	var refund, cost;
	cost = this.mySelectedProductRack.cost;
	this.refund = this.theDeposit - cost;
};

VendingMachine.prototype.getCoinRack = function (value) {
	var out, rack
	out = null;
	while (out == null){
		for (rack of this.allMyCoinRacks){
			if (rack.coinValue == value){
				out = rack.allMyCoins.giveChange;
			}
		}
	}
	return out;
};

VendingMachine.prototype.vendProduct = function() {
	var out;
	out = this.mySelectedProductRack.allMyProducts.pop();
	this.totalProductAmount -= out.cost;
	return out;
};

VendingMachine.prototype.returnAllFunds = function () {
	//if ( this.mySelectedProductRack.getProductAmount == 0 ) {
			return this.theDeposit;
	//};
};