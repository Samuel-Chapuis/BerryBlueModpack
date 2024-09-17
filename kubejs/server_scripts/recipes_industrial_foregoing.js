ServerEvents.recipes(event =>
	{
		event.remove({ output: 'industrialforegoing:pity_generator' })

		// event.shaped('createaddition:large_connector', [
		// 	'FZ ',
		// 	'ZS ',
		// 	'   '
		// ], {
		// 	F: 'fluxnetworks:flux_core',
		// 	Z: 'create:zinc_block',
		// 	S: 'minecraft:slime_ball'
		// });
	})