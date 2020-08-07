<script>
	
	import BUILDING from "./_motifs/building/building.motif";
	import KOLOS_POD from "./_data/_buildings/kolos-pod/kolos-pod.building.data";
	import elfaGridData from "./_data/_grids/1-elfa/elfa.grid.data";

	const tempatstore = { ...elfaGridData }

</script>

<div class='container'>
	<div class='jumbotron my-5'>
		<h1>Live the ZUMS SAGA !</h1>
		<p>Are you ready to discover the secrets of the ZUMS universe ?</p>
	</div>
	<div class='jumbotron my-5'>
		{ JSON.stringify(elfaGridData) }
	</div>
</div>

<style>

	h1 {
		color: #6a89cc;
		text-transform: uppercase;
		font-size: 4em;
	}
</style>