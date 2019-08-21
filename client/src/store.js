import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex';
import feathersClient from './feathers-client';

Vue.use(Vuex);
Vue.use(feathersVuex);

const { auth, FeathersVuex } = feathersVuex(feathersClient, {
  idField: '_id',
});

export default new Vuex.Store({
  plugins: [
    auth({
      userService: 'users',
    }),
  ],
});
