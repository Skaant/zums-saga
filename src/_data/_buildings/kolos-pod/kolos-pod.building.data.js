import BUILDING from "../../../_motifs/building/building.motif"
import kolosTrighbData from "../../_trighbs/kolos/kolos.trighb.data"

const kolosPodBuildingData = {
  id: 'kolos-pod-building',
  trighbId: kolosTrighbData.id,
  name: 'Module de survie'
}

BUILDING.test(kolosPodBuildingData)

export default kolosPodBuildingData