ServerEvents.recipes(allthemods => {
    allthemods.remove({ output: 'compactmekanismmachines:compact_fission_reactor' })
    allthemods.shaped('compactmekanismmachines:compact_fission_reactor', ['UUU', 'RTR', 'FFF'], {
      F: 'kubejs:compressed_fission_fuel_assembly_x729',
      R: 'kubejs:compressed_reactor_glass_x729',
      U: 'allthemodium:unobtainium_vibranium_alloy_ingot',
      T: 'mekanism_extras:supreme_chemical_tank'
    })
  })