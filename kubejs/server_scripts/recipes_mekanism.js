ServerEvents.recipes(event =>
	{
		event.remove({ output: 'mekanism:qio_drive_array' })
		event.remove({ output: 'mekanism:qio_dashboard' })
		event.remove({ output: 'mekanism:qio_exporter' })
		event.remove({ output: 'mekanism:qio_importer' })
		event.remove({ output: 'mekanism:qio_redstone_adapter' })
		event.remove({ output: 'mekanism:portable_qio_dashboard' })
		event.remove({ output: 'mekanism:qio_drive_base' })
		event.remove({ output: 'mekanism:qio_drive_hyper_dense' })
		event.remove({ output: 'mekanism:qio_drive_time_dilating' })
		event.remove({ output: 'mekanism:qio_drive_supermassive' })
		event.remove({ output: 'mekanism:basic_logistical_transporter' })
		event.remove({ output: 'mekanism:advanced_logistical_transporter' })
		event.remove({ output: 'mekanism:elite_logistical_transporter' })
		event.remove({ output: 'mekanism:ultimate_logistical_transporter' })
		event.remove({ output: 'mekanismgenerators:heat_generator' })
		event.remove({ output: 'mekanismgenerators:bio_generator' })
		event.remove({ output: 'mekanismgenerators:gas_burning_generator' })

		event.remove({ output: 'mekanism:advanced_control_circuit' })
		event.shaped('mekanism:advanced_control_circuit', [
			' P ',
			'IBI',
			' D '
		],{
			D: 'minecraft:diamond',	
			I: 'mekanism:alloy_infused',
			B: 'mekanism:basic_control_circuit',
			P: 'create:precision_mechanism'
		})

		event.remove({ output: 'mekanism:elite_control_circuit' })
		event.shaped('mekanism:elite_control_circuit', [
			' D ',
			'RAR',
			' D '
		],{	
			R: 'mekanism:alloy_reinforced',
			A: 'mekanism:advanced_control_circuit',
			D: 'ad_astra:desh_ingot'
		})

		event.remove({ output: 'mekanism:ultimate_control_circuit' })
		event.shaped('mekanism:ultimate_control_circuit', [
			'AFA',
			'FEF',
			'AFA'
		],{
			A: 'mekanism:alloy_atomic',	
			F: 'fluxnetworks:flux_core',
			E: 'mekanism:elite_control_circuit'
		})

		event.remove({ output: 'mekanism:basic_energy_cube' })
		event.shaped('mekanism:basic_energy_cube', [
			'RER',
			'BSB',
			'RER'
		],{
			R: 'minecraft:redstone',	
			E: 'mekanism:energy_tablet',
			S: 'mekanism:steel_casing',
			B: 'mekanism:basic_control_circuit'
		})

		event.remove({ output: 'mekanism:advanced_energy_cube' })
		event.shaped('mekanism:advanced_energy_cube', [
			'IEI',
			'ABA',
			'IEI'
		],{
			I: 'mekanism:alloy_infused',	
			E: 'mekanism:energy_tablet',
			B: 'mekanism:basic_energy_cube',
			A: 'mekanism:advanced_control_circuit'
		})

		event.remove({ output: 'mekanism:elite_energy_cube' })
		event.shaped('mekanism:elite_energy_cube', [
			'RER',
			'CAC',
			'RER'
		],{
			R: 'mekanism:alloy_reinforced',	
			E: 'mekanism:energy_tablet',
			A: 'mekanism:advanced_energy_cube',
			C: 'mekanism:elite_control_circuit'
		})

		event.remove({ output: 'mekanism:ultimate_energy_cube' })
		event.shaped('mekanism:ultimate_energy_cube', [
			'AEA',
			'UCU',
			'AEA'
		],{
			A: 'mekanism:alloy_atomic',	
			E: 'mekanism:energy_tablet',
			C: 'mekanism:elite_energy_cube',
			U: 'mekanism:ultimate_control_circuit'
		})

		event.remove({ output: 'mekanism:digital_miner' })
		event.shaped('mekanism:digital_miner', [
			'AEA',
			'LOL',
			'TST'
		],{	
			A: 'mekanism:alloy_atomic',
			E: 'mekanism:ultimate_control_circuit',
			L: 'mekanism:logistical_sorter',
			O: 'industrialforegoing:ore_laser_base',
			T: 'mekanism:teleportation_core',
			S: 'mekanism:steel_casing'
		})

		event.remove({ output: 'mekanism:crusher' })
		event.shaped('mekanism:crusher', [
			'RBR',
			'LSL',
			'CBC'
		],{	
			R: 'minecraft:redstone',
			B: 'mekanism:basic_control_circuit',
			L: 'minecraft:lava_bucket',
			S: 'mekanism:steel_casing',
			C: 'create:crushing_wheel'
		})

		event.remove({ output: 'mekanism:teleporter' })
		event.remove({ output: 'mekanism:teleporter_frame' })

		event.remove({ output: 'mekanism:electric_pump' })
		event.shaped('mekanism:electric_pump', [
			' B ',
			'ISI',
			'OMO'
		],{	
			B: 'minecraft:bucket',
			I: 'mekanism:alloy_infused',
			S: 'mekanism:steel_casing',
			O: 'mekanism:ingot_osmium',
			M: 'create:mechanical_pump'
		})

		event.remove({ output: 'mekanism:advanced_universal_cable' })
		event.shaped(Item.of('mekanism:advanced_universal_cable', 8), [
			'BBB',
			'BAB',
			'BBB'
		],{	
			B: 'mekanism:basic_universal_cable',
			A: 'mekanism:advanced_control_circuit'
		})

		event.remove({ output: 'mekanism:elite_universal_cable' })
		event.shaped(Item.of('mekanism:elite_universal_cable', 8), [
			'BBB',
			'BAB',
			'BBB'
		],{	
			B: 'mekanism:advanced_universal_cable',
			A: 'mekanism:elite_control_circuit'
		})

		event.remove({ output: 'mekanism:ultimate_universal_cable' })
		event.shaped(Item.of('mekanism:ultimate_universal_cable', 8), [
			'BBB',
			'BAB',
			'BBB'
		],{	
			B: 'mekanism:elite_universal_cable',
			A: 'mekanism:ultimate_control_circuit'
		})

		event.remove({ output: 'mekanism:atomic_disassembler' })
		event.shaped('mekanism:atomic_disassembler', [
			'RER',
			'UAU',
			' O '
		],{	
			R: 'mekanism:alloy_reinforced',
			E: 'mekanism:energy_tablet',
			U: 'mekanism:elite_control_circuit',
			A: 'mekanism:alloy_atomic',
			O: 'mekanism:ingot_refined_obsidian'
		})

		event.remove({ output: 'mekanismgenerators:wind_generator' })
		event.shaped('mekanismgenerators:wind_generator', [
			'POP',
			'OIO',
			'EAE'
		],{	
			O: 'mekanism:ingot_osmium',
			A: 'mekanism:elite_control_circuit',
			I: 'createaddition:alternator',
			E: 'mekanism:energy_tablet',
			P: 'industrialforegoing:plastic'
		})

		event.remove({ output: 'mekanismgenerators:solar_generator' })
		event.shaped('mekanismgenerators:solar_generator', [
			'SSS',
			'IPI',
			'OEO'
		],{	
			O: 'mekanism:ingot_osmium',
			S: 'mekanismgenerators:solar_panel',
			I: 'mekanism:alloy_infused',
			E: 'mekanism:energy_tablet',
			P: 'industrialforegoing:plastic'
		})

		event.remove({ output: 'mekanismgenerators:advanced_solar_generator' })
		event.shaped('mekanismgenerators:advanced_solar_generator', [
			'SIS',
			'SES',
			'OOO'
		],{	
			O: 'industrialforegoing:plastic',
			S: 'mekanismgenerators:solar_generator',
			I: 'mekanism:alloy_infused',
			E: 'mekanism:elite_control_circuit'
		})

		event.remove({ output: 'mekanism:metallurgic_infuser' })
		event.shaped('mekanism:metallurgic_infuser', [
			'IFI',
			'RMR',
			'PSP'
		],{	
			I: 'minecraft:iron_ingot',
			F: 'industrialforegoing:resourceful_furnace',
			R: 'minecraft:redstone',
			M: 'industrialforegoing:simple_machine_frame',
			P: 'industrialforegoing:plastic',
			S: 'create:sturdy_sheet'
		})

	})