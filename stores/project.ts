interface State {
    data: Array<any> | null,
    isLoading: boolean
  }
  
  export const useProjectStore = defineStore('project', {
    // convert to a function
    state: (): State => ({
        data: [],
        isLoading: true,
    }),
    getters: {
    },
    actions: {
        async get() {
            // Prevent double load
            if (this.data && this.data.length > 0) return this.data
            const result: any = await useApi('/projects/get')
            this.isLoading = false
            this.data = result
          },
      // easily reset state using `$reset`
      reset() {
        this.$reset()
      }
    }
  })