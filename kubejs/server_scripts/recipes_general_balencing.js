ServerEvents.recipes(event =>
	{
		event.remove({ output: 'buildinggadgets2:gadget_building' })
		event.remove({ output: 'buildinggadgets2:gadget_exchanging' })
		event.remove({ output: 'buildinggadgets2:gadget_copy_paste' })
		event.remove({ output: 'buildinggadgets2:gadget_cut_paste' })
		event.remove({ output: 'buildinggadgets2:gadget_destruction' })
		event.remove({ output: 'ae2:spatial_anchor' })
		event.remove({ output: 'fluxnetworks:flux_core' })

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

		event.shaped(Item.of('fluxnetworks:flux_core', 8), [
			'NON',
			'OLO',
			'NON'
		], {
			N: 'minecraft:netherite_scrap',
			O: 'minecraft:obsidian',
			L: 'railways:remote_lens'
		});

	})