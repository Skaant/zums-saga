import { writable } from 'svelte/store'

export default writable({
  open: false,
  history: {
    states: {},
    order: []
  }
})