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
	})