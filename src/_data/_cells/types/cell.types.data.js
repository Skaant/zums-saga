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
    }
  },
  [cellTypesEnum.SWAMP]: {
    name: {
      [appLangsEnum.EN]: 'Swamp',
      [appLangsEnum.FR]: 'Marais'
    }
  },
  [cellTypesEnum.HUMUS]: {
    name: {
      [appLangsEnum.EN]: 'Forest humus',
      [appLangsEnum.FR]: 'Humus forestier'
    }
  },
  [cellTypesEnum.PLAIN]: {
    name: {
      [appLangsEnum.EN]: 'Poor soil',
      [appLangsEnum.FR]: 'Terre pauvre'
    }
  }
}