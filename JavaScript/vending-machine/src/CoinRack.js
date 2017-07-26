var CoinRack = function ( newCapacity, newValue  ) {
//	this.validCoins = [];
	this.capacity = newCapacity; 
	this.coinValue = newValue; 
	this.allMyCoins	= [];
};

CoinRack.prototype.addCoin = function ( coin ) {
	/* 
	  a new coin is added to the change holder 
	  UNLESS the change holder is already full 
	  Assumes coin has already been validated and value is correct 
	   
	  RETURNED: indicates whether it was successful in adding the coin 
	*/ 
	var rejected = coin; 
	// only accept coins if not at limit 
	if ( this.allMyCoins.length < this.capacity ) {
		// accept coin of right value 
		if ( coin.value === this.coinValue ) {
				this.allMyCoins.push( coin ); 
				// nothing gets rejected
				rejected = null; 
		}
	}
	return rejected;   
};

CoinRack.prototype.countOfAvailableCoins = function () {
	return this.allMyCoins.length; 
}; 

CoinRack.prototype.toString = function () {	
	return "VALUE:" + this.coinValue  + " *" + this.countOfAvailableCoins; 
};

CoinRack.prototype.empty = function () {	
	    this.allMyCoins = []; 
};

CoinRack.prototype.getTotal = function () { 
	    return this.allMyCoins.length * this.coinValue; 
}; 

CoinRack.prototype.giveChange = function () { 
	/* 
	    as long as there are coins 
	    give out one as change 
	*/ 
	var change;
	if ( allMyCoins.length === 0 ) {
		// raise 
	} else {
		// remove record of bottom coin 
		change = this.allMyCoins.pop();
		return change;
	}
}; 
	
	 


