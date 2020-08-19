<script>

  export let terrain

  import terrainDataStore from "../../../_stores/terrainData/terrainData.store";
  import appStore from "../../../_stores/app/app.store";

  $: terrain = $terrainDataStore[terrain]
  $: lang = $appStore.lang

</script>

<div class='modal-body'>
  <div class='row'>

    <div class='col-12 col-lg-4'>
      <p class='badge badge-pill
          bg-{ terrain.id }
          py-2 px-3
          d-flex justify-content-center align-items-center'>
        { #if terrain.image }
    
          <img src='{ terrain.image }'
              class='mr-2'
              alt='{ terrain.name[lang]}' />
        { /if }
        <span class='h5 mb-0'>
          { terrain.name[lang] }</span>
      </p>
      
      { #if terrain.description
          && terrain.description[lang] }

        <p class='px-1 text-muted small mb-1'>
          { terrain.description[lang] }</p>
      { /if }
    </div>

    <div class='col-12 col-md-8 pt-2'>
      <p class='h4'>
        <img src='/icons/ressources/awa.svg'
            alt='The AWA ressource icon' />
        { terrain.AWA || '?' }
        
        <img src='/icons/ressources/ming.svg'
            alt='The MING ressource icon'
            class='ml-2' />
        { terrain.MING || '?' }

        <img src='/icons/ressources/bio.svg'
            alt='The BIO ressource icon'
            class='ml-2' />
        { terrain.BIO || '?' }
      </p>
    </div>
  </div>
</div>

<style>
  .badge.badge-pill img {

    height: 2rem;
  }

  p img {
    height: 2.4rem;
  }
</style>