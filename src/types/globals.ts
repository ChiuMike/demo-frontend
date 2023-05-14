export {};

declare global {
  interface Window {
    __RUNTIME_CONFIG__: {
      NODE_ENV: string;
      REACT_APP_BUILD: string;
      REACT_APP_BASE_URL: string;
      REACT_APP_SIGNIN: string;
      REACT_APP_SIGNOUT: string;
      REACT_APP_USER: string;
    };
  }
}