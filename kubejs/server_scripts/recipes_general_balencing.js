ServerEvents.recipes(event =>
	{
		event.remove({ output: 'ae2:spatial_anchor' })
		event.remove({ output: 'fluxnetworks:flux_core' })

		event.shaped(Item.of('fluxnetworks:flux_core', 8), [
			'NON',
			'OLO',
			'NON'
		], {
			N: 'minecraft:netherite_scrap',
			O: 'minecraft:obsidian',
			L: 'railways:remote_lens'
		});

	})