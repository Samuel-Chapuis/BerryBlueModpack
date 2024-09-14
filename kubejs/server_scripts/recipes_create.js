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
	})