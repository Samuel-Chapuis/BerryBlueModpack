ServerEvents.recipes(event =>
	{
		event.remove({ output: 'createaddition:biomass' })
		event.remove({ output: 'createaddition:large_connector' })

		event.shaped('createaddition:large_connector', [
			'FZ ',
			'ZS ',
			'   '
		], {
			F: 'fluxnetworks:flux_core',
			Z: 'create:zinc_block',
			S: 'minecraft:slime_ball'
		});


		event.custom({
			"type": "create:mixing",
			"ingredients": [
				{
				"item": "create:experience_nugget"
				},
				{
				"fluid": "minecraft:water",
				"amount": 100
				}
			],
			"results": [
				{
				"fluid": "industrialforegoing:essence",
				"amount": 10
				}
			],
			"heatRequirement": "heated"
		});



	})

