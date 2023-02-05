interface State {
    data: Array<any> | null,
    isLoading: boolean
  }
  
  export const useCareerStore = defineStore('career', {
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
            const result: any = await useApi('/careers/get')
            this.isLoading = false
        this.data = result.sort(
          (a, b) => b.start_year - a.start_year
        );
          },
      // easily reset state using `$reset`
      reset() {
        this.$reset()
      }
    }
  })