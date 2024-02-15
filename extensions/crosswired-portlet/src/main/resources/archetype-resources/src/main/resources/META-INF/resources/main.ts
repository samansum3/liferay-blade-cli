import { createVueApp } from "cw-vue-component-library";
import App from '@/App.vue'

const portletId = '${className}Portlet';
const appId: string = `#cw_portlet_${portletId}`;
window[appId] = () => createVueApp(portletId, App).mount(appId);
