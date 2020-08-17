import modalNumbersEnum from './_enums/numbers/modal.numbers.enum'
import CELL from '../cell/cell.motif'
import SingleCellModal from '../cell/_components/_modals/_single/single.cell.modal.svelte'

export default {
  
  [`${ modalNumbersEnum.SINGLE }_${ CELL.id }`]: SingleCellModal,
}