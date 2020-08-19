<script>

  export let target
  
	import appStore from "../../../../_stores/app/app.store"
  import gridStore from '../../../../_stores/grid/grid.store';
  import CellModalLangs from './Modal.langs';
  import appLangsEnum from "../../../app/_enums/langs/app.langs.enum"
  import modalStore from '../../_stores/modal.store';
  import closeModalAction from '../../_actions/closeModal/closeModal.action';
  import readersIndex from '../../readers.index'

  $: component = readersIndex[target.motifId]
    
</script>

<div id="{ target.motifId }"
    class='modal-body'>

  <svelte:component this={ component }
        target={ target } />
</div>