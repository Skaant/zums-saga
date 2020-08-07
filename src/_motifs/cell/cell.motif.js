import MOTIF from "../motif/motif.motif"

const CELL = {

  id: 'cell',
  name: 'Cell',
  types: [ MOTIF.id ],
  create: () => {

    throw new Error('CELL CREATION : NOT IMPLEMENTED')
  },
  test: () => 
  
    !!(id && name
      && Array.isArray(types) && types.length > 1),
  doc: () => true
}

export default MOTIF