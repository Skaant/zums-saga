<script>

  export let cell

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
          <span class={ 'badge bg-' + cell.type }>
            <img src='{ $cellTypesDataStore[cell.type].image }'
                class='mr-2'
                alt='{ $cellTypesDataStore[cell.type].name[lang] }' />
            { cell.id.replace(',', ', ') }
            · 
            { $cellTypesDataStore[cell.type].name[lang] }
            <img src='{ $cellTypesDataStore[cell.type].image }'
                class='ml-2'
                alt='{ $cellTypesDataStore[cell.type].name[lang] }' />
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

          <h2>
            <span class={ 'badge bg-' + building.trighbId }>
              { building.trighbId.toUpperCase() }</span>
          </h2>
          <h1>
            { building.name[lang] }</h1>
          <p>{ building && building.description[lang] }</p>

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