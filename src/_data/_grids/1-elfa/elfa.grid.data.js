import terrainIdsEnum from '../../../_motifs/terrain/_enums/ids/terrain.ids.enum'
import kolosPodBuildingData from "../../_buildings/kolos-pod/kolos-pod.building.data";
import genetoSeedsExtensionData from '../../_extensions/geneto-seeds/geneto-seeds.extension.data';
import kolosRelikItemData from '../../_items/kolos-relik/kolos-relik.item.data';

export default {
  cells: {
    '0,0': {
      terrain: terrainIdsEnum.GRASSLAND,
      building: {
        id: kolosPodBuildingData.id,
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
    },
    '-1,0': {
      terrain: terrainIdsEnum.GRASSLAND
    },
    '0,-1': {
      terrain: terrainIdsEnum.HUMUS
    },
    '0,1': {
      terrain: terrainIdsEnum.PLAIN
    },
    '1,0': {
      terrain: terrainIdsEnum.SWAMP
    }
  },
  zums: {
    '00000000': {
      id: '00000000',
      name: 'Vegara',
      inventory: []
    },
    '00000001': {
      id: '00000001',
      name: 'Nokimundo',
      inventory: []
    }
  }
}