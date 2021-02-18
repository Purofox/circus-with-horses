import { shallowMount } from '@vue/test-utils';
import Pomodoro from '@/components/Pomodoro/Pomodoro.vue';
import VueCookies from 'vue-cookies';
import Vue from "vue";
Vue.use(VueCookies);

describe('Pomodoro.vue', () => {
  it('Отображение корректной разметки', () => {
    const wrapper = shallowMount(Pomodoro)
    expect(wrapper.html()).toContain('<span class="minute">25</span>')
  });
  it('Нажатие кнопки сбрасывает имя сессии', () => {
    const wrapper = shallowMount(Pomodoro)
    const button = wrapper.find('.control--reset')
    button.trigger('click')
    expect(wrapper.vm.sessionName).toBe('Work')
  });
  it('Тест мок функций', () => {
    const mockFn = jest.fn();
    mockFn();
    expect(mockFn).toHaveBeenCalled();
  })
});
