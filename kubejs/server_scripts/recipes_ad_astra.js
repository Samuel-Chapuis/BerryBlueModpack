ServerEvents.recipes(event =>
	{
		event.remove({ output: 'ad_astra:coal_generator' })

		event.remove({ output: 'ad_astra:etrionic_blast_furnace' })
		event.shaped('ad_astra:etrionic_blast_furnace', [
			'PPP',
			'RSR',
			'PPP'
		], {
			P: 'create:iron_sheet',
			R: 'minecraft:redstone',
			S: 'industrialforegoing:machine_frame_simple'
		});
	})