interface State {
    data: number | null,
    isLoading: boolean
}
  
export const useProfileStore = defineStore('profile', {
    state: (): State => ({
        data: null,
        isLoading: true,
    }),
    getters: {
    },
    actions: {
        async get() {
            // Prevent double load
            if(this.data) return this.data
            try{
                const result: any = await useApi('/profile/get')
                this.isLoading = false
                this.data = result
            }catch(error){
                console.error("error in  fetching profile data", error)
            }
            
            },
        // easily reset state using `$reset`
        reset() {
            this.$reset()
        }
    }
})