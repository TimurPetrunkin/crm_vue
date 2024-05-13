export const useIsLoadingStore = defineStore('loader', {
	state: () => ({
		isLoading: false,
	}),
	actions: {
		set(data:boolean){
				this.isLoading = data
		}
	},
})