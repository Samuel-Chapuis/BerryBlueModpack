ServerEvents.recipes(event =>
	{
		event.remove({ output: 'fluxnetworks:flux_block' })
		event.shaped('fluxnetworks:flux_block', [
			'DCD',
			'CEC',
			'DCD'
		], {
			D: 'fluxnetworks:flux_dust',
			C: 'fluxnetworks:flux_core',
			E: 'mekanism:quantum_entangloporter'
		});

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