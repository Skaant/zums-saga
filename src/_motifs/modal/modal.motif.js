const id = 'modal'

const MODAL = {

  id,
  name: 'Modal',
  types: [ id ],
  create: () => {

    throw new Error('MODAL CREATION : NOT IMPLEMENTED')
  },
  test: modal =>
  
    !!(modal.id
      && modal.names
      && modal.motif
      && modal.number),
  readme: () => false,
  wiki: () => false
}

MOTIF.test(MODAL)

export default MODAL