<script>

  export let cell

  import buildingDataStore from '../../_stores/buildingsData/buildingsData.store'
  import cellTypesDataStore from '../../_stores/cellTypesData/cellTypesData.store'
	import appStore from "../../_stores/app/app.store"

  $: building = cell.building
    && {
      ...$buildingDataStore[cell.building.id],
      ...cell.building
    }

  $: lang = $appStore.lang

</script>

<div class='jumbotron my-5'>
  <h1>{
    building
      ? building.name[lang]

      : $cellTypesDataStore[cell.type].name[lang]
  }</h1>
  <h2>{
    building
      ? $cellTypesDataStore[cell.type].name[lang]
    
      : 'Pas de bâtiment'}
  </h2>
  <p>{ building && building.description[lang] }</p>
</div>