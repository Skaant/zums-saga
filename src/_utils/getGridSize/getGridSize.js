export default cells =>  

  Object.keys(cells)
    .reduce(
      ({ xMin, xMax, yMin, yMax }, id) => {

        const [ x, y ] = id.split(',')
        
        return {
          xMin: x < xMin ? x : xMin,
          xMax: x > xMax ? x : xMax,
          yMin: y < yMin ? y : yMin,
          yMax: y > yMax ? y : yMax
        }
      },
      {
        xMin: 0,
        xMax: 0,
        yMin: 0,
        yMax: 0
      }
    )