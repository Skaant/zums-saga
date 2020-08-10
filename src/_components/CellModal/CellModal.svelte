<script>

  export let cell

  import buildingDataStore from '../../_stores/buildingsData/buildingsData.store'
  import cellTypesDataStore from '../../_stores/cellTypesData/cellTypesData.store'
	import appStore from "../../_stores/app/app.store"
import gridStore from '../../_stores/grid/grid.store';

  $: building = cell.building
    && {
      ...$buildingDataStore[cell.building.id],
      ...cell.building
    }

  $: lang = $appStore.lang

  function handleDismiss() {

    gridStore.update(grid => ({

      ...grid,
      selectedCell: false
    }))
  }

</script>

<div class='modal show fade d-block'
    on:click={ handleDismiss }>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title">{
          building
            ? building.name[lang]
      
            : $cellTypesDataStore[cell.type].name[lang]
        }</h1>
        <h2>{
          building
            ? $cellTypesDataStore[cell.type].name[lang]
          
            : 'Pas de bâtiment'}
        </h2>
      </div>
      <div class="modal-body">
        <p>{ building && building.description[lang] }</p>
      </div>
    </div>
  </div>
</div>

<style>
  .modal {
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
</style>