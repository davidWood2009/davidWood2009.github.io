
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/take-home-calculator/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/take-home-calculator"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 536, hash: 'eaf0b90642a4d4798661e0d3ad478656fcf08fb8f8824e66cfb21ae91ea9c39d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1049, hash: 'f59abaafd75e12cd86c0f06b8a4447fac17e45af34c9c8136278d836f86aa239', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20875, hash: 'a209c4137a664512409b61f566d38b885aeb135b5a5e251db030a6253156144b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
