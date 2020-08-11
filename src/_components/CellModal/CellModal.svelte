<script>

  export let cell
  export let selected

  import buildingsDataStore from '../../_stores/buildingsData/buildingsData.store'
  import cellTypesDataStore from '../../_stores/cellTypesData/cellTypesData.store'
	import appStore from "../../_stores/app/app.store"
  import gridStore from '../../_stores/grid/grid.store';
  import CellModalLangs from './CellModal.langs';
  import appLangsEnum from "./../../_motifs/app/_enums/langs/app.langs.enum"

  $: building = cell.building
    && {
      ...$buildingsDataStore[cell.building.id],
      ...cell.building
    }

  $: lang = $appStore.lang
  $: name = $cellTypesDataStore[cell.type].name[lang]
  $: image = $cellTypesDataStore[cell.type].image

  function handleDismiss(e) {

    if (e.originalTarget.id === 'cell-modal'
      || e.originalTarget.id === 'close-modal'
      || e.originalTarget.parentElement.id === 'close-modal') {

      document.body.className = ''

      gridStore.update(grid => ({

        ...grid,
        selectedCell: false
      }))
    }
  }

</script>

<div id='cell-modal'
    class='modal show fade d-block'
    on:click={ handleDismiss }>
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">
          <span class='badge bg-{ cell.type } badge-pill px-3'>
            { #if image }

              <img src='{ image }'
                  class='mr-2'
                  alt='{ name}' />
            { /if }
            { cell.id.replace(',', ', ') }
            · 
            { $cellTypesDataStore[cell.type].name[lang] }
            { #if image }

              <img src='{ $cellTypesDataStore[cell.type].image }'
                  class='ml-2'
                  alt='{ $cellTypesDataStore[cell.type].name[lang] }' />
            { /if }
          </span>
        </h5>
        <button id='close-modal'
            type="button"
            class="close"
            on:click={ handleDismiss }>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        { #if building }

          <div class='row'>
            <div class='col-12 col-md-4'>
              <div class='rounded-circle w-100 { 'bg-' + cell.type } p-4 mb-4'>
                <svelte:component this={ building.imageSvgComponent } />
              </div>
            </div>
            <div class='col-12 col-md-8'>
              <h1>
                { building.name[lang] }
                <span class={ 'badge bg-' + building.trighbId }>
                  { building.trighbId.toUpperCase() }</span></h1>
              <p>{ building && building.description[lang] }</p>
            </div>
          </div>

        { :else }

          <p>Pas de bâtiment.</p>

        { /if }
      </div>
    </div>
  </div>
</div>

<style>

  .modal {
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  .modal .badge {
    line-height: inherit;
    font-size: inherit;
  }

  .modal-title img {
    height: 2rem;
  }
</style>