ServerEvents.recipes(event =>
	{
		event.remove({ output: 'industrialforegoing:pity_generator' })

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
		event.custom({
			type: "industrialforegoing:dissolution_chamber",
			"input": [
				{
				  "item": "minecraft:dirt"
				},
				{
				  "item": "minecraft:dirt"
				},
				{
				  "item": "minecraft:dirt"
				},
				{
				  "item": "minecraft:dirt"
				},
				{
				  "item": "minecraft:dirt"
				},
				{
				  "tag": "minecraft:dirt"
				},
				{
				  "tag": "minecraft:dirt"
				},
				{
				  "tag": "minecraft:dirt"
				}
			  ],
			"inputFluid": "{Amount:2000,FluidName:\"industrialforegoing:pink_slime\"}",
			"output": {
				"count": 1,
				"item": "minecraft:diamond",
			},
			"processingTime": 400

		})




	})