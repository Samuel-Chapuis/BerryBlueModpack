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