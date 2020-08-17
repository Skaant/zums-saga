<script>
	
	import getGridSize from "./_utils/getGridSize/getGridSize"
	import appStore from "./_stores/app/app.store"
	import gridStore from "./_stores/grid/grid.store"
	import LandingPage from './_components/LandingPage/LandingPage.svelte'
	import Grid from './_components/Grid/Grid.svelte'
	import Modal from "./_motifs/modal/_components/Modal/Modal.svelte";
	import modalStore from './_motifs/modal/_stores/modal.store'
	import { onMount } from "svelte";
	import modalListener from "./_motifs/modal/_listeners/modal.listener";

	const {
		xMin,
		xMax,
		yMin,
		yMax
	} = getGridSize($gridStore)

	onMount(() => {

		modalListener()
	})

</script>
	
{ #if $appStore.started }

	<Grid />

{ :else }

	<LandingPage />

{ /if }

{ #if $modalStore.open }
	
	<Modal target={ 
				$modalStore.history.states[
					$modalStore.history.order[0]] } />

{ /if }