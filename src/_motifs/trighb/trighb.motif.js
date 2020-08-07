import MOTIF from "../motif/motif.motif";

const id = 'trighb'

const TRIGHB = {
  id,
  name: 'TRIGHB',
  types: [ MOTIF.id ],
  create: () => {

    throw new Error('TRIGHB CREATION : NOT IMPLEMENTED')
  },
  test: trighb =>

    !!(trighb.id && trighb.name)
}

export default TRIGHB