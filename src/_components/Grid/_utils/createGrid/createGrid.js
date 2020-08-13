import config from "../../../../_config/config"
import cellTypesEnum from '../../../../_motifs/cell/_enums/types/cell.types.enum'
import CELL from '../../../../_motifs/cell/cell.motif'

export default grid => ({

  ...grid,
  cells: /** Lines */ Array.from(
    Array(config.GRID_CELLS_RADIUS * 2 + 1),
    (_, i) =>

      /** Cells */ Array.from(
        Array(config.GRID_CELLS_RADIUS * 2 + 1),
        (_, j) => {

          const id = `${
            i - config.GRID_CELLS_RADIUS
          },${
            j - config.GRID_CELLS_RADIUS
          }`

          return grid.cells[id]
            ? {
              id,
              motifId: CELL.id,
              ...grid.cells[id]
            }

            : {
              id,
              motifId: CELL.id,
              type: cellTypesEnum.UNREAVEALED
            }
        }))
})