var CoinsHolder  = function () {
	this.allMyCoinsArray = [];
	this.total = 0;
};


CoinsHolder.prototype.addCoin = function ( coin ) {
	this.allMyCoinsArray.push( coin ); 
	this.total += coin.value; 
};

CoinsHolder.prototype.empty = function () {
	var out = this.allMyCoinsArray.slice();
	this.total = 0; 
	this.allMyCoinsArray = [];
	return out;
};
