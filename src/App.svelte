<script>
	
	import BUILDING from "./_motifs/building/building.motif";
	import KOLOS_POD from "./_data/_buildings/kolos-pod/kolos-pod.building.data";
	import getGridSize from "./_utils/getGridSize/getGridSize"
	import appStore from "./_stores/app/app.store"
	import gridStore from "./_stores/grid/grid.store"
	import Cell from "./_components/Cell/Cell.svelte";
	import CellPanel from "./_components/CellPanel/CellPanel.svelte";
	import appLangsEnum from "./_motifs/app/_enums/langs/app.langs.enum"
	import LandingPage from './_components/LandingPage/LandingPage.svelte'

	const {
		xMin,
		xMax,
		yMin,
		yMax
	} = getGridSize($gridStore)

	$: focusCell = $gridStore.selectedCell
		|| $gridStore.hoveredCell

</script>
	
{ #if $appStore.started }

	<div>
		{ #each Object.entries($gridStore.cells) as cell }

			<Cell cell={ {
				id: cell[0],
				...cell[1]
			} } />
			
		{ /each }
	</div>

	{ #if focusCell }

		<CellPanel cell={ focusCell } />

	{ /if }

{ :else }

	<LandingPage />

{ /if }