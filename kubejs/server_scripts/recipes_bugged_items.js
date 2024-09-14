ServerEvents.recipes(event =>
	{
		event.remove({ output: 'luphieclutteredmod:small_shelf' })
		event.remove({ output: 'supplementaries:slingshot' })
		event.remove({ output: 'industrialforegoing:infinity_nuke' })
		event.remove({ output: 'create:schematicannon' })
		event.remove({ output: 'redeco:spruce_cabinet' })
		event.remove({ output: 'redeco:cobbled_deepslate_stepping_stones' })
		event.remove({ output: 'computercraft:computer_normal'})
		event.remove({ output: 'computercraft:pocket_computer_normal'})
		event.remove({ output: 'computercraft:pocket_computer_advanced'})
	
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
	})