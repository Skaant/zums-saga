<script>

  import appStore from "./../../_stores/app/app.store"
  import langs from "./LandingPage.langs"
	import appLangsEnum from "./../../_motifs/app/_enums/langs/app.langs.enum"

  $: lang = $appStore.lang
  $: switchTargetLang = lang === appLangsEnum.FR
    ? appLangsEnum.EN

    : appLangsEnum.FR

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

  <div class='jumbotron my-5'>

    <div class='float-right'>
      <span class='text-link'
        on:click={ () =>
          
            handleSwitchLang(switchTargetLang) }>
        { switchTargetLang.toUpperCase() }</span>
      <span>
        { lang.toUpperCase() }</span>
    </div>

    <h1 class='mt-5 mb-3'>
      { langs[lang]['title'] }</h1>
    <h2 class='lead mb-5'>
      { langs[lang]['lead'] }</h2>

    <button type='button'
        class='btn btn-lg btn-primary'
        on:click={ handleStart }>
      { langs[lang]['start-button'] }</button>
  </div>
</div>

<style>

	h1 {
		color: #6a89cc;
		text-transform: uppercase;
    font-size: 4em;
    line-height: 1;
	}
</style>