import cellTerrainsEnum from '../../../_motifs/cell/_enums/terrains/cell.terrains.enum'
import kolosPodBuildingData from "../../_buildings/kolos-pod/kolos-pod.building.data";
import genetoSeedsExtensionData from '../../_extensions/geneto-seeds/geneto-seeds.extension.data';
import kolosRelikItemData from '../../_items/kolos-relik/kolos-relik.item.data';

export default {
  cells: {
    '0,0': {
      type: cellTerrainsEnum.GRASSLAND,
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
      type: cellTerrainsEnum.GRASSLAND
    },
    '0,-1': {
      type: cellTerrainsEnum.HUMUS
    },
    '0,1': {
      type: cellTerrainsEnum.PLAIN
    },
    '1,0': {
      type: cellTerrainsEnum.SWAMP
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