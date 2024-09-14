ServerEvents.recipes(event =>
	{
		// TEST
		event.shaped(Item.of('minecraft:stone', 3), [
			'A B',
			' C ', // arg 2: the shape (array of strings)
			'B A'
		],{
			A: 'minecraft:andesite',
			B: 'minecraft:diorite',  //arg 3: the mapping object
			C: 'minecraft:granite'
		
		})
		  
		/*
		======== Items beugués ========
		*/
	
		// Retirer les recettes existantes
		event.remove({ output: 'luphieclutteredmod:small_shelf' })
		event.remove({ output: 'supplementaries:slingshot' })
		event.remove({ output: 'industrialforegoing:infinity_nuke' })
		event.remove({ output: 'create:schematicannon' })
		event.remove({ output: 'redeco:spruce_cabinet' })
		event.remove({ output: 'redeco:cobbled_deepslate_stepping_stones' })
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
		event.remove({ output: 'createaddition:biomass' })

		// Ajouter une nouvelle recette pour small_shelf
		event.shaped('luphieclutteredmod:small_shelf', [
			'PPP',
			'P  ',
			'   '
		],{
			P: 'minecraft:oak_planks'	
		})

		event.shaped('redeco:spruce_cabinet', [
			'SSS',
			'S S',
			'SSS'
		],{
			S: 'minecraft:spruce_slab'	
		})

		event.shaped('redeco:cobbled_deepslate_stepping_stones', [
			'SSS',
			'   ',
			'   '
		],{
			S: 'minecraft:cobbled_deepslate_slab'	
		})

		/*
		======== Items OP ========
		*/

		// Retirer les gadgets OP existants
		event.remove({ output: 'buildinggadgets2:gadget_building' })
		event.remove({ output: 'buildinggadgets2:gadget_exchanging' })
		event.remove({ output: 'buildinggadgets2:gadget_copy_paste' })
		event.remove({ output: 'buildinggadgets2:gadget_cut_paste' })
		event.remove({ output: 'buildinggadgets2:gadget_destruction' })
		event.remove({ output: 'ae2:spatial_anchor' })

		// Ajouter de nouvelles recettes pour les gadgets OP
		event.shaped('buildinggadgets2:gadget_building', [
			'IRI',
			'DTD',
			'ILI'
		], {
			I: 'minecraft:iron_ingot',
			R: 'minecraft:redstone',
			D: 'minecraft:diamond',
			L: 'minecraft:lapis_lazuli',
			T: 'yuushya:form_trans_item'
		})
		
		event.shaped('buildinggadgets2:gadget_exchanging', [
			'ILI',
			'DTD',
			'IRI'
		], {
			I: 'minecraft:iron_ingot',
			L: 'minecraft:lapis_lazuli',
			D: 'minecraft:diamond',
			R: 'minecraft:redstone',
			T: 'yuushya:form_trans_item'
		});
	
		event.shaped('buildinggadgets2:gadget_copy_paste', [
			'IRI',
			'ETE',
			'ILI'
		], {
			I: 'minecraft:iron_ingot',
			R: 'minecraft:redstone',
			E: 'minecraft:emerald',
			L: 'minecraft:lapis_lazuli',
			T: 'yuushya:form_trans_item'
		});
	
		event.shaped('buildinggadgets2:gadget_cut_paste', [
			'IRI',
			'STS',
			'ILI'
		], {
			I: 'minecraft:iron_ingot',
			R: 'minecraft:redstone',
			S: 'minecraft:shears',
			L: 'minecraft:lapis_lazuli',
			T: 'yuushya:form_trans_item'
		});
	
		event.shaped('buildinggadgets2:gadget_destruction', [
			'IRI',
			'ETE',
			'ILI'
		], {
			I: 'minecraft:iron_ingot',
			R: 'minecraft:redstone',
			E: 'minecraft:ender_pearl',
			L: 'minecraft:lapis_lazuli',
			T: 'yuushya:form_trans_item'
		});

		/*
		======== Ajouts ========
		*/

		// Retirer les recettes existantes
		event.remove({ output: 'bigreactors:insanite_block' })
		event.remove({ output: 'bigreactors:magentite_ingot' })

		// Ajouter de nouvelles recettes
        event.shaped('minecraft:dragon_breath', [
            'EEE',
            'EAE',
            'EEE'
        ], {
            E: 'minecraft:ender_eye',
            A: 'minecraft:potion'  
        })

		event.shaped('minecraft:calcite', [
            'QD ',
            'DQ ',
            '   '
        ], {
            Q: 'minecraft:quartz',
            D: 'minecraft:diorite'  
        })
		
		event.shaped('minecraft:brown_mushroom_block', [
			'MM ',
			'MM ',
			'   '
		], {
			M: 'minecraft:brown_mushroom'
		})

		event.shaped('minecraft:red_mushroom_block', [
			'MM ',
			'MM ',
			'   '
		], {
			M: 'minecraft:red_mushroom'
		})

		event.shaped('minecraft:mushroom_stem', [
			'BR ',
			'RB ',
			'   '
		], {
			R: 'minecraft:red_mushroom',
			B: 'minecraft:brown_mushroom'
		})

		event.remove({ output: 'ironchest:dirt_chest' })

		event.shaped('ironchests:dirt_chest', [
			'DDD',
			'DCD',
			'DDD'
		], {
			D: 'minecraft:dirt',
			C: 'minecraft:chest',
		});


		event.shapeless(Item.of('minecraft:netherite_scrap', 4), ['minecraft:netherite_ingot']);

		/*
		======== Équilibrage ========
		*/

		// Retirer les recettes existantes
		event.remove({ output: 'fluxnetworks:flux_core' })
		event.remove({ output: 'createaddition:large_connector' })

		// Ajouter de nouvelles recettes
		event.shaped(Item.of('fluxnetworks:flux_core', 8), [
			'NON',
			'OLO',
			'NON'
		], {
			N: 'minecraft:netherite_scrap',
			O: 'minecraft:obsidian',
			L: 'railways:remote_lens'
		});
	
		
		// event.smithing(
		// 	'industrialforegoing:ether_gas_bucket',            	// arg 1: output
		// 	'ethuim:ethium_upgrade_smithing_template', 			// arg 2: the smithing template
		// 	'minecraft:water_bucket',                          	// arg 3: the item to be upgraded
		// 	'ethuim:ethium_ingot'                            	// arg 4: the upgrade item
		//   )

		event.shaped('createaddition:large_connector', [
			'FZ ',
			'ZS ',
			'   '
		], {
			F: 'fluxnetworks:flux_core',
			Z: 'create:zinc_block',
			S: 'minecraft:slime_ball'
		});

		//-----------------------------
		// Crafts Mekanism
		//-----------------------------

		event.remove({ output: 'mekanism:advanced_control_circuit' })
		event.shaped('mekanism:advanced_control_circuit', [
			' D ',
			'IBI',
			' D '
		],{
			D: 'minecraft:diamond',	
			I: 'mekanism:alloy_infused',
			B: 'mekanism:basic_control_circuit'
		})

		event.remove({ output: 'mekanism:elite_control_circuit' })
		event.shaped('mekanism:elite_control_circuit', [
			' P ',
			'RAR',
			' R '
		],{
			P: 'create:precision_mechanism',	
			R: 'mekanism:alloy_reinforced',
			A: 'mekanism:advanced_control_circuit'
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
			'ROR',
			'PSP'
		],{	
			I: 'minecraft:iron_ingot',
			F: 'industrialforegoing:resourceful_furnace',
			R: 'minecraft:redstone',
			O: 'mekanism:ingot_osmium',
			P: 'industrialforegoing:plastic',
			S: 'create:sturdy_sheet'
		})
	}) 

