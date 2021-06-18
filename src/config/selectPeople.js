/**
 * author gemin 2021年06月18号
 * @param(String) layout 选择模板(leftRIght: 左右结构， mutiple: 多列结构， repeat: 平铺结构)
 * @param（）
 */

import store from '@/store'
import router from '@/router'

import { MU_SE_SETLAYOUT } from '@/store/mutation-types'

const selectPeople = (layout = 'leftRight') => {
	router.push({ name: 'selectPleple' })
	console.log('mutation', store.state.selectPeople)
	store.commit(MU_SE_SETLAYOUT, layout)
	// return arguments
}

export default selectPeople