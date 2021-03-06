const MicroGame = require('./MicroGame.js')

let game 
let mockRule = {
	when: jest.fn(() => true),
	then: jest.fn(() => true)
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
	jest.useFakeTimers()

	beforeEach( () => {
		game.run = jest.fn(game.run)
		game.loopFn = loop => setTimeout(loop, 1000)
	})

	test('Can run', () => {
		expect(game.run).toBeDefined()
	})

	test('Repeats itself', () => {
		game.run()
		jest.runOnlyPendingTimers()
		expect(game.run.mock.calls.length).toBeGreaterThan(1)
	})

	test('Checks All Rules', () => {
		game.rule(mockRule)
		game.run()
		game.rules.forEach( 
			rule => expect(rule.when).toHaveBeenCalled()
		)
	})
})


