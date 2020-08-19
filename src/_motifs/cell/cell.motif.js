import MOTIF from "../motif/motif.motif"
import appLangsEnum from '../app/_enums/langs/app.langs.enum'

const CELL = {

  id: 'cell',
  name: {
    [appLangsEnum.EN]: 'Tile',
    [appLangsEnum.FR]: 'Case'
  },
  types: [ MOTIF.id ],
  create: () => {

    throw new Error('CELL CREATION : NOT IMPLEMENTED')
  },
  test: () => 
  
    !!(id && name
      && Array.isArray(types) && types.length > 1),
  doc: () => true
}

export default CELL