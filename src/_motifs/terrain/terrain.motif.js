import MOTIF from "../motif/motif.motif";

const TRIGHB = {
  id: 'terrain',
  name: 'Terrain',
  types: [ MOTIF.id ],
  create: () => {

    throw new Error('TRIGHB CREATION : NOT IMPLEMENTED')
  },
  test: trighb =>

    !!(trighb.id && trighb.name)
}

export default TRIGHB