import config from "../../../../_config/config"
import cellTypesEnum from '../../../../_motifs/cell/_enums/types/cell.types.enum'

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
              ...grid.cells[id]
            }

            : {
              id,
              type: cellTypesEnum.UNREAVEALED
            }
        }))
})