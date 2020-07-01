/**
 * Declare a class BuildComputer 
 * along with all its methods to help user 
 * add different components and attributes 
 * to the computer they are building
 */

class BuildComputer{
	constructor(){
		this.computer = {};
	}

	//add a name for the computer
	addName(name){ 
		this.computer.name = name;
	}

	//add a brand name
	addBrand(brand){ 
		this.computer.brand = brand;
	}

	// add memory capacity
	addMemory(capacity){ 
		this.computer.capacity = `${capacity} GB DDR4 RAM`;
	}

	// add display size 
	addDisplay(length){ 
		this.computer.length = `${length}-inch`;
	}

	// add storage capacity
	addStorage(storageCapacity){ 
		this.computer.storageCapacity = `${storageCapacity} GB SSD`;
	}

	//add an address for shipping
	addShippingAddress(address){ 
		this.computer.shippingAddress = address;
	}

	// return the computer object for shipping
	shipComputer(){ 
		return this;
	}
}


//instantiate build class
let build = new BuildComputer(); 

//using build class we can add components to our computer
build.addName('MacBook Pro');
build.addBrand('Apple');
build.addMemory(16);
build.addDisplay(13.3);
build.addStorage(250);
build.addShippingAddress('Iris Watson P.O. Box 283 8562 Fusce Rd.');


console.log(build.shipComputer());
// log object