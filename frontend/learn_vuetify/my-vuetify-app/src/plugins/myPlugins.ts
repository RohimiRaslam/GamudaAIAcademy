export const myPlugin = {
  install: (app: any, options: any) => {
    app.config.globalProperties.$myGlobalMethod = () => {
      console.log("this is a global method");
    };
    app.directive("my-directive", {
      mounted(el: any) {
        el.style.color = options.color || "blue";
      },
    });
  },
};
