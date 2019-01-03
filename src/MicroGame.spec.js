const MicroGame = require('./MicroGame.js')

let game 
let randomRule = {
	when: () => true,
	then: () => false
}  

beforeEach( () => {
	game = new MicroGame()
}) 

test('Can create a MicroGame', () => {
	expect(game).toBeDefined()
})
describe('Rules', () => {
	test('Can add rules', () => {
		let value = 0
		game.rule({
			when: () => true,
			then: () => value++
		})
		expect(game.rules).toHaveLength(1)

	})

	test('Can execute rules', () => {
		let value = 0
		game.rule({
			when: () => true,
			then: () => value++
		})
		game.run()
		expect(value).toBeGreaterThan(0)

	})

	test('Can execute rules conditionally',() => {
		let value = 0
		game.rule({
			when: () => false,
			then: () => value++
		})
		game.run()
		expect(value).toBe(0)
	})
})

describe('Game Loop', () => {
	test('Can run', () => {
		expect(game.run).toBeDefined()
	})

	test('Check All Rules', () => {
		game.run()
		game.rule(randomRule)
		game.rules.forEach( 
			rule => expect(rule.when).toHaveBeenCalled()
		)
	})
	test('Update All Elements', () => {
		game.run()
		game.elements.forEach( 
			element => expect(element.update).toHaveBeenCalled()
		)
	})
})


