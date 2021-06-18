import Vue from 'vue'
import Vuex from 'vuex'

import selectPeople from './selectPeople'

Vue.use(Vuex)

const store = new Vuex.Store({

	modules: {
		selectPeople: selectPeople
	}
})

export default store