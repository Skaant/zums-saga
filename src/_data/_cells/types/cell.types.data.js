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
      [appLangsEnum.FR]: 'Terreau'
    }
  },
  [cellTypesEnum.RIVER]: {
    name: {
      [appLangsEnum.EN]: 'Rivière',
      [appLangsEnum.FR]: 'River'
    }
  },
  [cellTypesEnum.HUMUS]: {
    name: {
      [appLangsEnum.EN]: 'Humus',
      [appLangsEnum.FR]: 'Humus'
    }
  },
  [cellTypesEnum.GROUND]: {
    name: {
      [appLangsEnum.EN]: 'Ground',
      [appLangsEnum.FR]: 'Terre'
    }
  }
}