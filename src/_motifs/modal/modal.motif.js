import motifsTypesEnum from "../_enums/types/motifs.types.enum"

const MODAL = {

  id: 'modal',
  name: 'Modal',
  types: [ motifsTypesEnum.UI ],
  description: `
A modal is a pop-up window which shows up on top of the page content.
  `,
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