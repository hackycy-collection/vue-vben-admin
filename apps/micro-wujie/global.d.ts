import type { EventBus } from 'wujie';
import type Wujie from 'wujie/esm/sandbox';

declare global {
  interface Window {
    // 是否存在无界
    __POWERED_BY_WUJIE__?: boolean;
    // 子应用公共加载路径
    __WUJIE_PUBLIC_PATH__: string;
    // 原生的querySelector
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__: typeof Document.prototype.querySelector;
    // 原生的querySelectorAll
    __WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__: typeof Document.prototype.querySelectorAll;
    // 原生的window对象
    __WUJIE_RAW_WINDOW__: Window;
    // 子应用沙盒实例
    __WUJIE: Wujie;
    // 子应用mount函数
    __WUJIE_MOUNT: () => void;
    // 子应用unmount函数
    __WUJIE_UNMOUNT: () => Promise<void> | void;
    // 注入对象
    $wujie: {
      bus: EventBus;
      location?: object;
      props?: { [key: string]: any };
      shadowRoot?: ShadowRoot;
    };
  }
}

declare module 'vue' {
  export interface GlobalComponents {
    WujieVue: (typeof import('wujie-vue3'))['default'];
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    microAppName?: string;
    microAppUrl?: string;
  }
}

export declare const __wujie_global_types__: unique symbol;
