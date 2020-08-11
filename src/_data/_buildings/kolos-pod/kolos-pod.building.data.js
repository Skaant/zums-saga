import BUILDING from "../../../_motifs/building/building.motif"
import kolosTrighbData from "../../_trighbs/kolos/kolos.trighb.data"
import HabitatDomeSvg from '../../../../public/icons/buildings/habitat-dome.svg'

const kolosPodBuildingData = {
  id: 'kolos-pod-building',
  trighbId: kolosTrighbData.id,
  name: {
    en: 'Survival pod',
    fr: 'Capsule de survie'
  },
  description: {
    en: "It looks like half an house, half a really big seed with large window openings on the sunny side.",
    fr: "C'est une sorte de maison en forme de grosse graine avec des ouvertures pour les fenêtes sur la face ensoleillée."
  },
  xilm: {
    static: 2,
    level: 1
  },
  spark: {
    static: 1,
    level: 2
  },
  flom: {
    xilm: 1/3,
    spark: 1/3,
    zums: 1/3
  },
  data: {
    static: 3,
    zums: 1
  },
  image: '/icons/buildings/habitat-dome.svg',
  imageSvgComponent: HabitatDomeSvg
}

BUILDING.test(kolosPodBuildingData)

export default kolosPodBuildingData