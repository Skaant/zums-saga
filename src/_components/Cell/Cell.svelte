<script>

  export let cell;
  
  import gridStore from "../../_stores/grid/grid.store";
  import cellTypesDataStore from "../../_stores/cellTypesData/cellTypesData.store";
  import buildingsDataStore from "../../_stores/buildingsData/buildingsData.store";
  import openModalAction from "../../_motifs/modal/_actions/openModal/openModal.action";
  
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
      
      return {

        ...grid,
        selectedCell: cell
      }
    })

    openModalAction(cell)
  }

</script>

<div class='cell bg-{ cell.type } { building ? 'bg-building' : '' } m-1 shadow-sm position-relative'
    style='background-image: url("{
      building
        ? building.image

        : $cellTypesDataStore[cell.type].image }")'
    on:mouseover={ handleMouseOver }
    on:mouseout={ handleMouseOut }
    on:click={ handleClick }>
  { #if building }

    <img src={ $cellTypesDataStore[cell.type].image }
        class='cell-type-miniature position-absolute'
        alt={ $cellTypesDataStore[cell.type].id } />
  { /if }
</div>

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

  .cell-type-miniature {

    bottom: 4px;
    right: 4px;
    width: 2rem;
  }
  
  .bg-building {
    
    background-size: 85%;
  }
</style>