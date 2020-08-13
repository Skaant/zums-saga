import modalStore from "../_stores/modal.store"

let prevState = false

export default () =>

  modalStore.subscribe(state => {

    if (state.open && !prevState.open) {

      setTimeout(
        () => $('#modal').modal('show'),
        15
      )
    
    } else if (!state.open && prevState.open) {

      setTimeout(
        $('#modal').modal('hide'),
        15
      )
    }

    prevState = state
  })