ServerEvents.recipes(event =>
	{
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
	})