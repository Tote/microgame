const MicroGame = require('./MicroGame.js')

let game 

beforeEach( () => {
	game = new MicroGame()
}) 

test('Can create a MicroGame', () => {
	expect(game).toBeDefined()
})

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

