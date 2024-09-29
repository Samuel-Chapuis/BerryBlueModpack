ServerEvents.recipes(event =>
	{
		event.remove({ output: 'ae2:controller' })
		event.shaped('ae2:controller', [
			'SPS',
			'FMF',
			'SFS'
		], {
			S: 'ae2:smooth_sky_stone_block',
            P: 'ae2:engineering_processor',
            F: 'ae2:fluix_crystal',
            M: 'industrialforegoing:machine_frame_simple'
		});

		event.remove({ output: 'ae2:cell_component_4k' })
		event.shaped('ae2:cell_component_4k', [
			'RPR',
			'CQC',
			'ACA'
		], {
			R: 'minecraft:redstone',
			P: 'ae2:calculation_processor',
			C: 'ae2:cell_component_1k',
			Q: 'ae2:quartz_glass',
			A: 'mekanism:alloy_reinforced'
		});

		event.remove({ output: 'ae2:cell_component_16k' })
		event.shaped('ae2:cell_component_16k', [
			'GPG',
			'CQC',
			'DCD'
		], {
			G: 'minecraft:glowstone_dust',
			P: 'ae2:calculation_processor',
			C: 'ae2:cell_component_4k',
			D: 'ad_astra:desh_ingot',
			Q: 'ae2:quartz_glass'
		});

		event.remove({ output: 'ae2:cell_component_64k' })
		event.shaped('ae2:cell_component_64k', [
			'GPG',
			'CQC',
			'UCU'
		], {
			G: 'minecraft:glowstone_dust',
			P: 'ae2:calculation_processor',
			C: 'ae2:cell_component_16k',
			U: 'mekanism:ultimate_control_circuit',
			Q: 'ae2:quartz_glass'
		});

		event.remove({ output: 'ae2:cell_component_256k' })
		event.shaped('ae2:cell_component_256k', [
			'SPS',
			'CQC',
			'ICI'
		], {
			S: 'ae2:sky_dust',
			P: 'ae2:calculation_processor',
			C: 'ae2:cell_component_64k',
			I: 'ad_astra:calorite_ingot',
			Q: 'ae2:quartz_glass'
		});

		event.remove({ output: 'ae2:crafting_unit' })
		event.shaped('ae2:crafting_unit', [
			'III',
			'CMC',
			'PLP'
		], {
			I: 'minecraft:iron_ingot',
			C: 'ae2:fluix_glass_cable',
			M: 'industrialforegoing:machine_frame_advanced',
			P: 'ae2:calculation_processor',
			L: 'ae2:logic_processor'
		});

		event.remove({ output: 'ae2:molecular_assembler' })
		event.shaped('ae2:molecular_assembler', [
			'IQI',
			'AMF',
			'IQI'
		], {
			I: 'minecraft:iron_ingot',
			Q: 'ae2:quartz_glass',
			A: 'ae2:annihilation_core',
			M: 'industrialforegoing:machine_frame_advanced',
			F: 'ae2:formation_core'
		});

		event.remove({ output: 'ae2:quantum_ring' })
		event.shaped('ae2:quantum_ring', [
			'PLP',
			'ECS',
			'PLP'
		], {
			P: 'ad_astra:permafrost',
			L: 'ae2:logic_processor',
			E: 'ae2:engineering_processor',
			C: 'ae2:energy_cell',
			S: 'ae2:fluix_smart_dense_cable'
		});
	})