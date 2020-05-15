import App from '../App.vue'
import { shallowMount } from '@vue/test-utils'
import Modal from '../components/Modal.vue'

describe('App.vue', () => {
  /**
   * It tests something happen (output) when a child component
   * emits a custom-event (input).
   */
  test('hides Modal when Modal emits close-modal event', () => {
    const wrapper = shallowMount(App)

    wrapper.find(Modal).vm.$emit('close-modal')

    expect(wrapper.find(Modal).exists()).toBeFalsy()
  })
})
