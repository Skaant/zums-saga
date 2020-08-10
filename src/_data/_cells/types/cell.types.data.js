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
  [cellTypesEnum.SOIL]: {
    name: {
      [appLangsEnum.EN]: 'Soil',
      [appLangsEnum.FR]: 'Terre'
    }
  }
}