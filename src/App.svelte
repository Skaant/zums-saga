<script>
	
	import BUILDING from "./_motifs/building/building.motif";
	import KOLOS_POD from "./_data/_buildings/kolos-pod/kolos-pod.building.data";
	import getGridSize from "./_utils/getGridSize/getGridSize"
	import appStore from "./_stores/app/app.store"
	import gridStore from "./_stores/grid/grid.store"
	import Cell from "./_components/Cell/Cell.svelte";
	import CellPanel from "./_components/CellPanel/CellPanel.svelte";
	import appLangsEnum from "./_motifs/app/_enums/langs/app.langs.enum"

	const {
		xMin,
		xMax,
		yMin,
		yMax
	} = getGridSize($gridStore)

	$: focusCell = $gridStore.selectedCell
		|| $gridStore.hoveredCell

	function handleSwitchLang(lang) {

		appStore.update(app => ({
			
			...app,
			lang
		}))
	}

	function handleStart() {

		appStore.update(app => ({
			
			...app,
			started: true
		}))
	}

</script>

<div class='container'>

	{ JSON.stringify($appStore)}
	
	{ #if $appStore.started }

		<div class='jumbotron my-5'>
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

		<div class='jumbotron my-5'>
			{ #if $appStore.lang === appLangsEnum.FR }

				<div class='float-right'>
					<span class='text-link'
						on:click={ () =>
						
								handleSwitchLang(appLangsEnum.EN) }>
						EN</span>
					<span>FR</span>
				</div>

				<h1>Vivez la SAGA ZUMS !</h1>
				<p>Êtes-vous prêts à percer les mystères de l'univers des ZUMS ?</p>

				<button type='button'
						class='btn btn-primary col-6'
						on:click={ handleStart }>
					Oui, je suis prêt !</button>
			
			{ /if }
			{ #if $appStore.lang === appLangsEnum.EN }

				<div class='float-right'>
					<span>EN</span>
					<span class='text-link'
						on:click={ () =>
						
								handleSwitchLang(appLangsEnum.FR) }>
						FR</span>
				</div>
				
				<h1>Live the ZUMS SAGA !</h1>
				<p>Are you ready to discover the secrets of the ZUMS universe ?</p>

			{ /if }
		</div>

	{ /if }
</div>

<style>

	h1 {
		color: #6a89cc;
		text-transform: uppercase;
		font-size: 4em;
	}
</style>