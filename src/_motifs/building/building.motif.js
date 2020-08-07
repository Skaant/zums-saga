import MOTIF from "../motif/motif.motif";

const id = 'building'

const BUILDING = {
  id,
  name: 'Building',
  types: [ MOTIF.id ],
  create: () => {

    throw new Error('BUILDING CREATION : NOT IMPLEMENTED')
  },
  test: self =>

    !!(self.id
      && self.trighbId
      && self.name)
}

MOTIF.test(BUILDING)

export default BUILDING