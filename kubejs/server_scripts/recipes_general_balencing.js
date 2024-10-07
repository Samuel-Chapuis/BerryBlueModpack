ServerEvents.recipes(event =>
	{
		event.remove({ output: 'ae2:spatial_anchor' })

		event.remove({ output: 'techutilities:universal_seal_block' })
		event.shaped(Item.of('techutilities:universal_seal_block', 1), [
			'SSS',
			'SES',
			'SSS'
		], {
			S: 'mekanism:ingot_steel',
			E: 'mekanism:elite_control_circuit'
		});

	})