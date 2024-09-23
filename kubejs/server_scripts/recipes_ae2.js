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
	})