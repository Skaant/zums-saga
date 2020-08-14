import modalStore from "../_stores/modal.store"
import closeModalAction from "../_actions/closeModal/closeModal.action"

let prevState = false

export default () =>

  modalStore.subscribe(state => {

    if (state.open && !prevState.open) {

      setTimeout(() => {
        
        $('#modal').modal('show')
        $('#modal').on(
          'hide.bs.modal',
          e => {

            closeModalAction()
          })
      }, 25)
    }

    prevState = state
  })