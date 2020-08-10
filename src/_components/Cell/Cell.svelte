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

    gridStore.update(grid => ({

      ...grid,
      selectedCell: grid.selectedCell
        ? false

        : cell
    }))
  }

</script>

<div class='cell cell-{ cell.type } m-1'
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

  .cell-SOIL {
    background-color: #78e08f;
  }

  .cell-HUMUS {
    background-color: #38ada9;
  }

  .cell-GROUND {
    background-color: #fad390;
  }

  .cell-RIVER {
    background-color: #6a89cc;
  }

  .cell-UNREAVEALED {
    background-color: #dfe6e9;
  }
</style>