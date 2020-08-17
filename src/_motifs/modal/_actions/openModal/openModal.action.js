import modalsIndex from "../../modals.index"
import modalStore from "../../_stores/modal.store"

export default target => {

  /** 1. Determine how to treat `target` */
  const number = Array.isArray(target)
    ? 'multiple'

    : 'single'

  const motifId = number === 'multiple'
    ? (target[0] && target[0].motifId)

    : (target && target.motifId)

  if (!motifId) {

    throw new Error('OPEN MODAL ACTION : NO TARGET ELEMENT ID')
  }

  /** 2. Find target modal component */
  const modalComponent = modalsIndex[`${ number }_${ motifId }`]

  if (!modalComponent) {

    throw new Error(`OPEN MODAL ACTION : NO MODAL FOUND FOR "${
      motifId }_${ number }"`)
  }

  /** 3. Render & open modal */
  modalStore.update(state => {

    const key = `${ motifId }_${ number }_${
      Date.now().toString().slice(7) }_${
      Math.random().toString().slice(12)
    }`
    
    return {
      ...state,
      open: true,
      history: {
        states: {
          ...state.history.state,
          [key]: {
            ...target,
            component: modalComponent
          }
        },
        order: [
          key,
          ...state.history.order
        ]
      }
    }
  })
}