class MicroGame{
	constructor(){
		this.rules = []
		this.loopFn = () => {}
	}

	run(){
		this.rules
			.filter( rule => rule.when() )
			.forEach( rule => rule.then() )

		this.loopFn( this.run.bind(this) )
	}

	rule( rule ){
		this.rules.push(rule)
	}

}

module.exports = MicroGame
