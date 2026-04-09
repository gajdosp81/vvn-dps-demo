import { defineStore } from 'pinia'
import { vvnGroups } from '@/mocks/data'

export const useVvnStore = defineStore('vvn', {
  state: () => ({
    groups: vvnGroups
  }),
  actions: {
    addGroup(group) {
      this.groups.push(group)
    }
  }
})