import Vue from 'vue'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import App from '../../src/App.vue'
import store from "../../src/store";

const localVue = createLocalVue();
localVue.use(Vuex)
Vue.use(VueRouter)

describe('test App', () => {
    it('app works', () => {
        const wrapper = shallowMount(App, {
            localVue,
            store,
        })
    })
    it("renders with mock store", () => {
        const wrapper = shallowMount(App, {
            mocks: {
                $store: {
                    getters: {
                        getWeather: {}
                    }
                }
            }
        });
    })
})