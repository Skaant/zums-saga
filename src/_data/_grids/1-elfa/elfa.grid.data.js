import cellTypesEnum from '../../../_motifs/cell/_enums/types/cell.types.enum'
import kolosPodBuildingData from "../../_buildings/kolos-pod/kolos-pod.building.data";
import genetoSeedsExtensionData from '../../_extensions/geneto-seeds/geneto-seeds.extension.data';
import kolosRelikItemData from '../../_items/kolos-relik/kolos-relik.item.data';

export default {
  cells: {
    '0,0': {
      type: cellTypesEnum.SOIL,
      building: {
        id: kolosPodBuildingData.id,
        state: {
          inventory: [ {
            id: kolosRelikItemData.id,
            state: {}
          } ],
          zums: [ {
            id: '00000000'
          }, {
            id: '00000001'
          } ],
          extensions: [ {
            id: genetoSeedsExtensionData.id,
            state: {}
          } ]
        }
      }
    },
    '-1,0': {
      type: cellTypesEnum.SOIL
    },
    '0,-1': {
      type: cellTypesEnum.HUMUS
    },
    '0,1': {
      type: cellTypesEnum.GROUND
    },
    '1,0': {
      type: cellTypesEnum.RIVER
    }
  },
  zums: {
    '00000000': {
      id: '00000000',
      state: {
        name: 'Vegara',
        inventory: []
      }
    },
    '00000001': {
      id: '00000001',
      state: {
        name: 'Nokimundo',
        inventory: []
      }
    }
  }
}