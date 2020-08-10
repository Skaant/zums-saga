import { writable } from 'svelte/store'
import elfaGridData from '../../_data/_grids/1-elfa/elfa.grid.data'

export default writable({
  ...elfaGridData,
  selectedCell: false
})