<script>
  
	import appStore from "../../../../_stores/app/app.store"
  import gridStore from '../../../../_stores/grid/grid.store';
  import CellModalLangs from './Modal.langs';
  import appLangsEnum from "../../../app/_enums/langs/app.langs.enum"
  import modalStore from '../../_stores/modal.store';
  import closeModalAction from '../../_actions/closeModal/closeModal.action';

  $: modal = $modalStore.history.states[
    $modalStore.history.order[0]]
    
</script>

<div id='modal'
    class='modal'>

  <div class="modal-dialog modal-lg">
    <div class="modal-content border-0">
      <svelte:component this={ modal.component }
          target={ modal } />
    </div>
  </div>
</div>

<style>

  .modal-dialog {
    margin-top: calc(15vh + 3.5rem)
  }

  .modal-content {
    background-color: unset;
  }
</style>