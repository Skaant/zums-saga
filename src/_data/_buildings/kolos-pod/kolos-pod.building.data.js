import BUILDING from "../../../_motifs/building/building.motif"
import kolosTrighbData from "../../_trighbs/kolos/kolos.trighb.data"

const kolosPodBuildingData = {
  id: 'kolos-pod-building',
  trighbId: kolosTrighbData.id,
  name: {
    en: 'KOLOS pod',
    fr: 'Capsule KOLOS'
  },
  description: {
    en: "It looks like half an house, half a really big seed with large window openings on the sunny side.",
    fr: "C'est une sorte de maison en forme de grosse graine avec des ouvertures pour les fenêtes sur la face ensoleillée."
  }
}

BUILDING.test(kolosPodBuildingData)

export default kolosPodBuildingData