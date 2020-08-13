const id = 'motif'

/** **MOTIF** stands as the `motif.motif`.
 * 
 * *Naming things is the First Power.* */
const MOTIF = {

  id,
  name: 'Motif',
  types: [ id ],
  // create & persist methods ?
  create: () => {

    throw new Error('MOTIF CREATION : NOT IMPLEMENTED')
  },
  test: self =>
  
    !!(self.id
      && self.name
      && Array.isArray(self.types) 
        && self.types.length > 1),
  readme: () => false,
  wiki: () => false
}

MOTIF.test(MOTIF)
// @todo : _motif.types.reduce((acc, _type) => acc && MOTIF.get(_type).test(_motif), true)

export default MOTIF