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

		event.remove({ output: 'ad_astra:nasa_workbench' })
		event.shaped('ad_astra:nasa_workbench', [
			'IAI',
			'RMR',
			'PSP'
		], {
			I: 'createaddition:iron_rod',
			A: 'mekanism:advanced_control_circuit',
			R: 'minecraft:redstone_torch',
			M: 'industrialforegoing:machine_frame_advanced',
			P: 'ad_astra:steel_plate',
			S: 'ad_astra:steel_block'
		});
	})