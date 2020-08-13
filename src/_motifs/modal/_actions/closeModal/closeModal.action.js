import modalStore from "../../_stores/modal.store"

export default () => {

  modalStore.update(state => ({

    ...state,
    open: false
  }))
}