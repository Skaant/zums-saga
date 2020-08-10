<script>
  
  import gridStore from "../../_stores/grid/grid.store";
  import createGrid from './_utils/createGrid/createGrid'
  import Cell from "../Cell/Cell.svelte";
  import { onMount } from "svelte";

  $: grid = createGrid($gridStore)

	onMount(() => {

    const documentElement = document.documentElement
    const gridElement = document.getElementById('grid') 
    
    documentElement.scrollTo(
      gridElement.scrollWidth / 2
        - documentElement.clientWidth / 2,
      gridElement.scrollHeight / 2
        - documentElement.clientHeight / 2
    )

    console.log(gridElement.scrollHeight / 2,
      documentElement.clientHeight / 2, gridElement, documentElement)
	});

</script>

<div id='grid'
    class='container-fluid'>
  { #each grid.cells as line, i }

    <div class='row'>

      { #each line as cell, j }

        <Cell cell={ cell } />

      { /each }
  
    </div>

  { /each }
</div>

<style>

  .container-fluid {
    width: max-content;
  }
</style>