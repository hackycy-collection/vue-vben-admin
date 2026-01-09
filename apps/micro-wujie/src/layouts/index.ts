const BasicLayout = () => import('./basic.vue');
const AuthPageLayout = () => import('./auth.vue');
const MicroAppLayout = () => import('./micro-app.vue');

const IFrameView = () => import('@vben/layouts').then((m) => m.IFrameView);

export { AuthPageLayout, BasicLayout, IFrameView, MicroAppLayout };
