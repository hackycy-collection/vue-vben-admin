/* eslint-disable no-console */
import type { Recordable } from '@vben/types';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
const lifecycles: Record<string, Function> = {
  beforeLoad: (appWindow: Window) => {
    console.log(`${appWindow.__WUJIE.id} beforeLoad 生命周期`);
  },
  beforeMount: (appWindow: Window) => {
    console.log(`${appWindow.__WUJIE.id} beforeMount 生命周期`);
  },
  afterMount: (appWindow: Recordable<any>) => {
    console.log(`${appWindow.__WUJIE.id} afterMount 生命周期`);
  },
  beforeUnmount: (appWindow: Recordable<any>) => {
    console.log(`${appWindow.__WUJIE.id} beforeUnmount 生命周期`);
  },
  afterUnmount: (appWindow: Recordable<any>) => {
    console.log(`${appWindow.__WUJIE.id} afterUnmount 生命周期`);
  },
  activated: (appWindow: Recordable<any>) => {
    console.log(`${appWindow.__WUJIE.id} activated 生命周期`);
  },
  deactivated: (appWindow: Recordable<any>) => {
    console.log(`${appWindow.__WUJIE.id} deactivated 生命周期`);
  },
  loadError: (url: string, e: unknown) => {
    console.log(`${url} 加载失败`, e);
  },
};

export default lifecycles;
