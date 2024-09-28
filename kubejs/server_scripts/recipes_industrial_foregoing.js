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
			L: 'minecraft:logs',
			A: 'create:andesite_ingot',
			I: 'minecraft:iron_ingot',
			R: 'minecraft:redstone_block'
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


	})