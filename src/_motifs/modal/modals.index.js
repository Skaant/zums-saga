import modalNumbersEnum from './_enums/numbers/modal.numbers.enum'
import CELL from '../cell/cell.motif'
import cellSingleModal from '../cell/_components/_modals/_single/cell.single.modal.svelte'

export default {
  
  [`${ CELL.id }_${ modalNumbersEnum.SINGLE }`]: cellSingleModal,
}