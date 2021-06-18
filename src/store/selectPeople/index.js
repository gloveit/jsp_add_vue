import { MU_SE_SETLAYOUT } from '../mutation-types.js'

let state = {
    layout: 'right'
}

let mutations = {
	[MU_SE_SETLAYOUT] (state, param) {
		state.layout = param
	}
}

let actions = {
	
}

export default { 	namespaced: true, state, mutations, actions}