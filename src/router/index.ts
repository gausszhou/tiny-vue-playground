import { createRouter, createWebHashHistory } from 'vue-router'
import SelectSearchable from '@/views/select-searchable.vue';
import SelectFilterable from '@/views/select-filterable.vue';
import SelectRemoteMethod from '@/views/select-remote-method.vue';
import SelectRemoteSearchable from '@/views/select-remote-searchable.vue';

const routes = [
  { path: '/', component: SelectSearchable },
  { path: '/select-searchable', component: SelectSearchable },
  { path: '/select-filterable', component: SelectFilterable },
  { path: '/select-remote-method', component: SelectRemoteMethod },
  { path: '/select-remote-searchable', component: SelectRemoteSearchable },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})