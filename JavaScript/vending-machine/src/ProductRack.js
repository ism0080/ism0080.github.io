var ProductRack = function ( newCapacity, newCost, newDescription) {
	this.allMyProducts = [];
	this.capacity = newCapacity;
	this.cost = newCost;
	this.description = newDescription;
};

ProductRack.prototype.addProduct = function ( aProduct ) {
	/* 
	  if product description matches 
	  // and cost is OK 
	  // and are not filled 
	  accept the product 
	*/ 
	var result = false; 
	if ( aProduct.description === this.description && 
	  aProduct.cost === this.cost && 
	  this.allMyProducts.length < this.capacity ) {
		this.allMyProducts.push( aProduct ); 
		result = true; 
	}
	return result; 
};

ProductRack.prototype.getProductAmount = function () {
	return this.allMyProducts.length; 
};


ProductRack.prototype.toString = function () {
	return this.description  + " worth "  + this.cost + " *" + this.getProductAmount();
};

/*
ProductRack.prototype.vendProduct = function () {
		return  this.allMyProducts.pop();
	
};
*/

