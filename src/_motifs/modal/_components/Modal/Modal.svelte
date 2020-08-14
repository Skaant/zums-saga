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

  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <svelte:component this={ modal.component }
          target={ modal } />
    </div>
  </div>
</div>

<style>

  .modal {
    transition: top 1s ease-in-out, background-color 1.6s ease-in-out;
  }

  .modal:not(.modal-hover) {
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }
</style>