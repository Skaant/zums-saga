<script>

  export let cell;
  
  import gridStore from "../../_stores/grid/grid.store";
  import cellTypesDataStore from "../../_stores/cellTypesData/cellTypesData.store";
  import buildingsDataStore from "../../_stores/buildingsData/buildingsData.store";
  
  $: building = cell.building
    && {
      ...$buildingsDataStore[cell.building.id],
      ...cell.building
    }

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

<div class='cell bg-{ cell.type } { building ? 'bg-building' : '' } m-1 shadow-sm'
    style='background-image: url("{
      building
        ? building.image

        : $cellTypesDataStore[cell.type].image }")'
    on:mouseover={ handleMouseOver }
    on:mouseout={ handleMouseOut }
    on:click={ handleClick }></div>

<style>

  .cell {
    height: 128px;
    width: 128px;
    border-radius: 8px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: 50%;
  }

  .cell:not(.bg-building) {
    
    background-size: 35%;
  }
  
  .bg-building {
    
    background-size: 85%;
  }
</style>