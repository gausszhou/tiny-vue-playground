import { createRouter, createWebHashHistory } from 'vue-router'
import SelectSearchable from '@/views/select-searchable.vue';
import SelectRemoteMethod from '@/views/select-remote-method.vue';
import SelectRemoteSearchable from '@/views/select-remote-searchable.vue';

const routes = [
  { path: '/', component: SelectSearchable },
  { path: '/select-remote-method', component: SelectRemoteMethod },
  { path: '/select-remote-searchable', component: SelectRemoteSearchable },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})