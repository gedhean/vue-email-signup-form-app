import Form from '../Form.vue'
import { shallowMount } from '@vue/test-utils'

describe('Form.vue', () => {
  /**
   * It tests that the component emits a custom-event (output)
   * when another event (submit) fires (input)
   */
  test('emits form-submitted when submit button is clicked', () => {
    const wrapper = shallowMount(Form, {
      mocks: { axios: { post: jest.fn() } }
    })

    wrapper.find('button[type="submit"]').trigger('submit')
    expect(wrapper.emitted('form-submitted')).toHaveLength(1)
  })

  /**
   * It tests form submition request. In simple words: ensure
   * the form post some data to the right endpoint.
   */
  test('POST inputed user email when submint is triggered', () => {
    const axios = { post: jest.fn() }
    const wrapper = shallowMount(Form, { mocks: { axios } })
    const url = '/subscribe'
    const email = 'user@email.com'

    wrapper.find('input[name="email"]').setValue(email)

    wrapper.find('button[type="submit"]').trigger('submit')

    expect(axios.post).toHaveBeenCalledWith(url, {
      email,
      enterCompetition: true
    })
  })

  test('enterCompetion input value is yes is checked by default', () => {
    const wrapper = shallowMount(Form, {
      mocks: { axios: { post: jest.fn() } }
    })

    const input = wrapper.find('input[value="yes"]')

    expect(input.element.checked).toBe(true)
  })

  test('send POST request with enterCompetiton value on submit', () => {
    const url = '/subscribe'
    const axios = { post: jest.fn() }
    const wrapper = shallowMount(Form, { mocks: { axios } })

    wrapper.find('input[value="no"]').setChecked()

    wrapper.find('button[type="submit"]').trigger('submit')

    expect(axios.post).toHaveBeenCalledWith(url, {
      email: null,
      enterCompetition: false
    })
  })
})
