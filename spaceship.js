class Spaceship{

	addShipToCrew(crew) {
		crew.forEach(function(element) {element.currentShip = this}.bind(this)) // .bind ship binds this (of ship) to the for each loops this
	}

	constructor (name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked = true, phasersCharge = 'uncharged') {
		this.name = name
		this.crew = crew
		this.phasers = phasers
		this.shields = shields
		this.cloaked = cloaked
		this.warpDrive = warpDrive
		this.phasersCharge = phasersCharge
		if (crew.length > 0) {
			this.docked = false 
			this.addShipToCrew(this.crew)} 
			else {this.docked = true}
	}

}