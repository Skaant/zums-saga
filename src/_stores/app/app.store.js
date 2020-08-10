import { writable } from 'svelte/store'
import langsEnum from '../../_motifs/app/_enums/langs/app.langs.enum'

export default writable({
  started: false,
  lang: localStorage.getItem('lang')
    || langsEnum.FR
})