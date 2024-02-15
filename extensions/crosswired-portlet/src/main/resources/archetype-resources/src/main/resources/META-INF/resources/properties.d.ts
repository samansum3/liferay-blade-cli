/* eslint-disable */
declare module '@vue/runtime-core' {
  import { CwWindow } from "cw-vue-component-library/common/types/CwWindow";
  import { Navigator } from "cw-vue-component-library/common/utils/Navigator";
  import {
    ActionService,
    ResourceService,
    RestService,
    SingleActionService,
    SingleResourceService
  } from "cw-vue-component-library/common/services/CwService";

  interface ComponentCustomProperties {
    portletId: string;
    namespace: string;
    cwWindow: CwWindow;
    cwNavigator: Navigator;
    restService: RestService;
    resourceService: ResourceService;
    singleResourceService: SingleResourceService;
    actionService: ActionService;
    singleActionService: SingleActionService;

    qualify(key: string): string;

    translate(key: string, args?: number | string | string[]): string;

    getRefInstance(ref: string): any;

    getElementByRef(ref: string): HTMLElement;

    getComponentElementByRef(ref: string): HTMLElement;
  }
}

export {}
