import cellTerrainsEnum from '../../../_motifs/cell/_enums/terrains/cell.terrains.enum'
import appLangsEnum from '../../../_motifs/app/_enums/langs/app.langs.enum'

export default {
  [cellTerrainsEnum.VOID]: {
    name: {
      [appLangsEnum.EN]: 'Void',
      [appLangsEnum.FR]: 'Vide'
    }
  },
  [cellTerrainsEnum.UNREAVEALED]: {
    name: {
      [appLangsEnum.EN]: 'Unrevealed',
      [appLangsEnum.FR]: 'Inexploré'
    }
  },
  [cellTerrainsEnum.GRASSLAND]: {
    name: {
      [appLangsEnum.EN]: 'Rich soil',
      [appLangsEnum.FR]: 'Terre riche'
    },
    image: '/icons/cell_types/wheat.svg'
  },
  [cellTerrainsEnum.SWAMP]: {
    name: {
      [appLangsEnum.EN]: 'Swamp',
      [appLangsEnum.FR]: 'Marais'
    },
    image: '/icons/cell_types/swamp.svg'
  },
  [cellTerrainsEnum.HUMUS]: {
    name: {
      [appLangsEnum.EN]: 'Forest humus',
      [appLangsEnum.FR]: 'Humus forestier'
    },
    image: '/icons/cell_types/leaf-swirl.svg'
  },
  [cellTerrainsEnum.PLAIN]: {
    name: {
      [appLangsEnum.EN]: 'Poor soil',
      [appLangsEnum.FR]: 'Terre pauvre'
    },
    image: '/icons/cell_types/grass.svg'
  }
}