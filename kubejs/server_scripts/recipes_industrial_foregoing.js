ServerEvents.recipes(event =>
	{
		event.remove({ output: 'industrialforegoing:pity_generator' })
		event.remove({ output: 'industrialforegoing:mycelial_reactor' })
		event.remove({ output: 'industrialforegoing:gold_gear' })
		event.shaped('industrialforegoing:gold_gear', [
			' G ',
			'GBG',
			' G '
		], {
			G: 'minecraft:gold_ingot',
			B: 'create:brass_ingot'
		});

		event.remove({ output: 'industrialforegoing:machine_frame_pity' })
		event.shaped('industrialforegoing:machine_frame_pity', [
			'LAL',
			'IRI',
			'LAL'
		], {
			L: 'minecraft:oak_log',
			A: 'create:andesite_alloy',
			I: 'minecraft:iron_ingot',
			R: 'minecraft:redstone_block'
		});
		

		event.remove({ output: 'mifa:netherite_gear' })
		event.shaped('mifa:netherite_gear', [
			' N ',
			'NBN',
			' N '
		], {
			N: 'minecraft:netherite_ingot',
			B: 'create:brass_ingot'
		});
	})


//--------------------------------------------------------------------------------------
// Dissolution Chamber Recipes
//--------------------------------------------------------------------------------------


ServerEvents.recipes(event =>
	{
		event.remove({ output: 'industrialforegoing:machine_frame_advanced' })
		event.custom({
			type: "industrialforegoing:dissolution_chamber",
			"input": [
				{
				  "item": "industrialforegoing:plastic"
				},
				{
				  "item": "industrialforegoing:machine_frame_simple"
				},
				{
				  "item": "industrialforegoing:plastic"
				},
				{
				  "item": "minecraft:netherite_scrap"
				},
				{
				  "item": "minecraft:netherite_scrap"
				},
				{
				  "item": "minecraft:gold_ingot"
				},
				{
				  "item": "mekanism:advanced_control_circuit"
				},
				{
				  "item": "minecraft:gold_ingot"
				}
			  ],
			"inputFluid": "{Amount:500,FluidName:\"industrialforegoing:pink_slime\"}",
			"output": {
				"count": 1,
				"item": "industrialforegoing:machine_frame_advanced",
			},
			"processingTime": 400

		})

		event.remove({ output: 'industrialforegoing:machine_frame_supreme' })
		event.custom({
			type: "industrialforegoing:dissolution_chamber",
			"input": [
				{
				  "item": "industrialforegoing:plastic"
				},
				{
				  "item": "industrialforegoing:machine_frame_advanced"
				},
				{
				  "item": "industrialforegoing:plastic"
				},
				{
				  "item": "minecraft:netherite_ingot"
				},
				{
				  "item": "minecraft:netherite_ingot"
				},
				{
				  "item": "minecraft:diamond"
				},
				{
				  "item": "mekanism:elite_control_circuit"
				},
				{
				  "item": "minecraft:diamond"
				}
			  ],
			"inputFluid": "{Amount:500,FluidName:\"industrialforegoing:ether_gas\"}",
			"output": {
				"count": 1,
				"item": "industrialforegoing:machine_frame_supreme",
			},
			"processingTime": 500

		})

		event.remove({ output: 'mifa:efficiency_addon_3' })
		event.custom({
			type: "industrialforegoing:dissolution_chamber",
			"input": [
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "mifa:netherite_gear"
				},
				{
				  "item": "ad_astra:ostrum_ingot"
				},
				{
				  "item": "minecraft:blaze_rod"
				},
				{
				  "item": "minecraft:blaze_rod"
				}
			  ],
			"inputFluid": "{Amount:500,FluidName:\"industrialforegoing:ether_gas\"}",
			"output": {
				"count": 1,
				"item": "mifa:efficiency_addon_3",
			},
			"processingTime": 300

		})

		event.remove({ output: 'mifa:efficiency_addon_4' })
		event.custom({
			type: "industrialforegoing:dissolution_chamber",
			"input": [
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "mifa:netherite_gear"
				},
				{
				  "item": "ad_astra:calorite_ingot"
				},
				{
				  "item": "minecraft:blaze_rod"
				},
				{
				  "item": "minecraft:blaze_rod"
				}
			  ],
			"inputFluid": "{Amount:500,FluidName:\"industrialforegoing:ether_gas\"}",
			"output": {
				"count": 1,
				"item": "mifa:efficiency_addon_4",
			},
			"processingTime": 400

		})

		event.remove({ output: 'mifa:processing_addon_3' })
		event.custom({
			type: "industrialforegoing:dissolution_chamber",
			"input": [
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "mifa:netherite_gear"
				},
				{
				  "item": "ad_astra:ostrum_ingot"
				},
				{
				  "item": "minecraft:furnace"
				},
				{
				  "item": "minecraft:crafting_table"
				}
			  ],
			"inputFluid": "{Amount:500,FluidName:\"industrialforegoing:ether_gas\"}",
			"output": {
				"count": 1,
				"item": "mifa:processing_addon_3",
			},
			"processingTime": 300

		})

		event.remove({ output: 'mifa:processing_addon_4' })
		event.custom({
			type: "industrialforegoing:dissolution_chamber",
			"input": [
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "mifa:netherite_gear"
				},
				{
				  "item": "ad_astra:calorite_ingot"
				},
				{
				  "item": "minecraft:furnace"
				},
				{
				  "item": "minecraft:crafting_table"
				}
			  ],
			"inputFluid": "{Amount:500,FluidName:\"industrialforegoing:ether_gas\"}",
			"output": {
				"count": 1,
				"item": "mifa:processing_addon_4",
			},
			"processingTime": 400

		})

		event.remove({ output: 'mifa:speed_addon_3' })
		event.custom({
			type: "industrialforegoing:dissolution_chamber",
			"input": [
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "mifa:netherite_gear"
				},
				{
				  "item": "ad_astra:ostrum_ingot"
				},
				{
				  "item": "minecraft:sugar"
				},
				{
				  "item": "minecraft:sugar"
				}
			  ],
			"inputFluid": "{Amount:500,FluidName:\"industrialforegoing:ether_gas\"}",
			"output": {
				"count": 1,
				"item": "mifa:speed_addon_3",
			},
			"processingTime": 300

		})

		event.remove({ output: 'mifa:speed_addon_4' })
		event.custom({
			type: "industrialforegoing:dissolution_chamber",
			"input": [
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:redstone"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "minecraft:glass_pane"
				},
				{
				  "item": "mifa:netherite_gear"
				},
				{
				  "item": "ad_astra:calorite_ingot"
				},
				{
				  "item": "minecraft:sugar"
				},
				{
				  "item": "minecraft:sugar"
				}
			  ],
			"inputFluid": "{Amount:500,FluidName:\"industrialforegoing:ether_gas\"}",
			"output": {
				"count": 1,
				"item": "mifa:speed_addon_4",
			},
			"processingTime": 400

		})
	})