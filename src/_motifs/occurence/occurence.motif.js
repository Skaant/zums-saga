import MOTIF from "../motif/motif.motif"
import occurenceTypesEnum from './_enums/types/occurence.types.enum'

const OCCURENCE = {

  id: 'occurence',
  name: 'Occurence',
  types: [ MOTIF.id ],
  test: () => false,
  doc: () => true
}

MOTIF.test(OCCURENCE)

export default OCCURENCE