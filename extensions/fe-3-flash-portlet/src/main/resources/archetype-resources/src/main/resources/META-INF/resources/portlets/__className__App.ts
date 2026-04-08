import { createVueApp } from '@lib/main.ts';
import App from '@/components/${className}App.vue';

const portletId = '${className}Portlet';
const appId: string = `#cw_portlet_${portletId}`;
createVueApp(portletId, App).then((vueApp) => (window[appId] = () => vueApp.mount(appId)));
