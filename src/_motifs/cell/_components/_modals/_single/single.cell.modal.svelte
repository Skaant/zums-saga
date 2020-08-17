<script>

  export let target
  
  import appStore from "../../../../../_stores/app/app.store";
  import cellTypesDataStore from "../../../../../_stores/cellTypesData/cellTypesData.store";
  import buildingsDataStore from "../../../../../_stores/buildingsData/buildingsData.store";
  import closeModalAction from '../../../../modal/_actions/closeModal/closeModal.action'

  /** CELL itself */
  $: lang = $appStore.lang
  $: name = $cellTypesDataStore[target.type].name[lang]
  $: image = $cellTypesDataStore[target.type].image

  /** BUILDING, if any */
  $: building = target.building
    && {
      ...$buildingsDataStore[target.building.id],
      ...target.building
    }

</script>

<!-- MODAL HEADER (2 components) -->

<div class='modal-header'>
  <h5 class="modal-title h2">
    <span class='bg-{ target.type } px-5 rounded-pill'>
      { #if image }

        <img src='{ image }'
            class='mr-3'
            alt='{ name}' />
      { /if }
      { target.id.replace(',', ', ') }
      · 
      { $cellTypesDataStore[target.type].name[lang] }
      { #if image }

        <img src='{ $cellTypesDataStore[target.type].image }'
            class='ml-3'
            alt='{ $cellTypesDataStore[target.type].name[lang] }' />
      { /if }
    </span>
  </h5>

  <button id='close-modal'
      type="button"
      class="close text-white"
      data-dismiss="modal">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

<!-- MODAL BODIES (n components) -->

<!-- Terrain reader (small) -->
<!-- Building reader (big) -->
<div class='modal-body bg-light'>
  <p>Ok, yéyé</p>
</div>

<style>

  .modal-title img {
    height: 5rem;
  }

  .close {
    text-shadow: none;
    opacity: initial;
  }
</style>