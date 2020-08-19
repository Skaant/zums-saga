import terrainsTypesEnum from '../../_motifs/terrain/_enums/ids/terrain.ids.enum'
import appLangsEnum from '../../_motifs/app/_enums/langs/app.langs.enum'

export default {
  [terrainsTypesEnum.VOID]: {
    id: terrainsTypesEnum.VOID,
    name: {
      [appLangsEnum.EN]: 'Void',
      [appLangsEnum.FR]: 'Vide'
    }
  },
  [terrainsTypesEnum.UNREAVEALED]: {
    id: terrainsTypesEnum.UNREAVEALED,
    name: {
      [appLangsEnum.EN]: 'Unrevealed',
      [appLangsEnum.FR]: 'Inexploré'
    }
  },
  [terrainsTypesEnum.GRASSLAND]: {
    id: terrainsTypesEnum.GRASSLAND,
    name: {
      [appLangsEnum.EN]: 'Rich soil',
      [appLangsEnum.FR]: 'Terre riche'
    },
    image: '/icons/cell_types/wheat.svg',
    description: {
      [appLangsEnum.EN]: 'The grass is green, the soil is fresh.',
      [appLangsEnum.FR]: "L'herbe est verte, le sol est frais."
    },
    AWA: 2,
    MING: 1,
    BIO: 3
  },
  [terrainsTypesEnum.SWAMP]: {
    id: terrainsTypesEnum.SWAMP,
    name: {
      [appLangsEnum.EN]: 'Swamp',
      [appLangsEnum.FR]: 'Marais'
    },
    image: '/icons/cell_types/swamp.svg',
    description: {
      [appLangsEnum.EN]: 'It smells the absence of movement.',
      [appLangsEnum.FR]: "Ca sent l'absence de mouvement."
    },
    AWA: 3,
    MING: 1,
    BIO: 1
  },
  [terrainsTypesEnum.HUMUS]: {
    id: terrainsTypesEnum.HUMUS,
    name: {
      [appLangsEnum.EN]: 'Forest humus',
      [appLangsEnum.FR]: 'Humus forestier'
    },
    image: '/icons/cell_types/leaf-swirl.svg',
    description: {
      [appLangsEnum.EN]: "It's really pleasant to walk on this souple layers.",
      [appLangsEnum.FR]: "C'est vraiment agréable de marcher sur ces couches moelleuses."
    },
    AWA: 2,
    MING: 1,
    BIO: 2
  },
  [terrainsTypesEnum.PLAIN]: {
    id: terrainsTypesEnum.PLAIN,
    name: {
      [appLangsEnum.EN]: 'Poor soil',
      [appLangsEnum.FR]: 'Terre pauvre'
    },
    image: '/icons/cell_types/grass.svg',
    description: {
      [appLangsEnum.EN]: "Wind, drought and frost methodically polished this land.",
      [appLangsEnum.FR]: "Le vent, la sécheresse et le givre ont méthodiquement poli cette terre."
    },
    AWA: 1,
    MING: 3,
    BIO: 1
  }
}