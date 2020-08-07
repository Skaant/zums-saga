import MOTIF from "../motif/motif.motif"

const GRID = {

  id: 'grid',
  name: 'Grid',
  types: [ MOTIF.id ],
  create: () => {

    throw new Error('GRID CREATION : NOT IMPLEMENTED')
  },
  test: ({ cells }) => 
  
    !!(cells
      && Array.isArray(cells)
      && cells.length > 0
      && cells.reduce(
        (acc, line) =>

          acc
            && Array.isArray(line)
            && line.length > 0
            /** @todo && line.reduce(/** each is CELL.test() valid */,
        true
      )),
  doc: () => true
}

export default GRID