<script>

  export let cell;
  
  import gridStore from "../../_stores/grid/grid.store";

  function handleMouseOver() {

    gridStore.update(grid => ({

      ...grid,
      hoveredCell: cell
    }))
  }

  function handleMouseOut() {

    gridStore.update(grid => ({

      ...grid,
      hoveredCell: false
    }))
  }

  function handleClick() {

    gridStore.update(grid => {
      
      document.body.className = 'modal-open'
      
      return {

        ...grid,
        selectedCell: grid.selectedCell
          ? false

          : cell
      }
    })
  }

</script>

<div class='cell bg-{ cell.type } m-1 shadow-sm'
    on:mouseover={ handleMouseOver }
    on:mouseout={ handleMouseOut }
    on:click={ handleClick }></div>

<style>

  .cell {
    height: 128px;
    width: 128px;
    border-radius: 8px;
    cursor: pointer;
  }
</style>