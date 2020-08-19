<script>

  export let target
  
  import appStore from "../../../../../_stores/app/app.store";
  import terrainDataStore from "../../../../../_stores/terrainData/terrainData.store";
  import buildingsDataStore from "../../../../../_stores/buildingsData/buildingsData.store";
  import closeModalAction from '../../../../modal/_actions/closeModal/closeModal.action'
  import CELL from '../../../cell.motif'
  import TerrainReader from "../../../../terrain/_reader/terrain.reader.svelte";

  /** CELL itself */
  $: lang = $appStore.lang
  $: name = $terrainDataStore[target.terrain].name[lang]

  /** BUILDING, if any */
  $: building = target.building
    && {
      ...$buildingsDataStore[target.building.id],
      ...target.building
    }

</script>

<!-- MODAL HEADER (2 components) -->

<div class='modal-header'>
  <h5 class="modal-title">
    { CELL.name[lang] }
    { target.id.replace(',', ', ') }
  </h5>

  <button id='close-modal'
      type="button"
      class="close"
      data-dismiss="modal">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

<!-- MODAL BODIES (n components) -->

<TerrainReader terrain={ target.terrain }/>

<!-- Building reader (big) -->


<style>

  .close {
    text-shadow: none;
    opacity: initial;
  }
</style>