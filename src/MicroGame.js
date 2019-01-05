class MicroGame{
	constructor(){
		this.rules = []
	}

	run(){
		this.rules
			.filter( rule => rule.when() )
			.forEach( rule => rule.then() )
	}

	rule( rule ){
		this.rules.push(rule)
	}

}

module.exports = MicroGame
