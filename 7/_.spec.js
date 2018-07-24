/*
Write the code to shallow mount a component with a Vuex store installed on a localVue. The store config object will be imported from another file
*/

import Vuex from 'vuex'
import {shallow, createLocalVue} from 'vue-test-utils'
import storeConfig from './store-config'
import TestComponent from './TestComponent.vue'

test('mounts correctly', () => {
  const localVue = createLocalVue()

  localVue.use(Vuex)

  const store = new Vuex.Store(storeConfig)

  shallow(TestComponent, {
    localVue,
    store
  })
})
