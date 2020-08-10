import { readable } from 'svelte/store'
import kolosPodBuildingData from '../../_data/_buildings/kolos-pod/kolos-pod.building.data'

export default readable({
  [kolosPodBuildingData.id]: kolosPodBuildingData
})