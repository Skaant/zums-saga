import cellTypesEnum from '../../../_motifs/cell/_enums/types/cell.types.enum'
import appLangsEnum from '../../../_motifs/app/_enums/langs/app.langs.enum'

export default {
  [cellTypesEnum.VOID]: {
    name: {
      [appLangsEnum.EN]: 'Void',
      [appLangsEnum.FR]: 'Vide'
    }
  },
  [cellTypesEnum.UNREAVEALED]: {
    name: {
      [appLangsEnum.EN]: 'Unrevealed',
      [appLangsEnum.FR]: 'Inexploré'
    }
  },
  [cellTypesEnum.GRASSLAND]: {
    name: {
      [appLangsEnum.EN]: 'Rich soil',
      [appLangsEnum.FR]: 'Terre riche'
    },
    image: '/icons/cell_types/wheat.svg'
  },
  [cellTypesEnum.SWAMP]: {
    name: {
      [appLangsEnum.EN]: 'Swamp',
      [appLangsEnum.FR]: 'Marais'
    },
    image: '/icons/cell_types/swamp.svg'
  },
  [cellTypesEnum.HUMUS]: {
    name: {
      [appLangsEnum.EN]: 'Forest humus',
      [appLangsEnum.FR]: 'Humus forestier'
    },
    image: '/icons/cell_types/leaf-swirl.svg'
  },
  [cellTypesEnum.PLAIN]: {
    name: {
      [appLangsEnum.EN]: 'Poor soil',
      [appLangsEnum.FR]: 'Terre pauvre'
    },
    image: '/icons/cell_types/grass.svg'
  }
}