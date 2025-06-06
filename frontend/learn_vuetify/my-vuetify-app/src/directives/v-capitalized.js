export const vCapitalize = {
  mounted(el) {
    const capitalize = () => {
      el.textContent =
        el.textContent.charAt(0).toUpperCase() + el.textContent.slice(1);
    };
    capitalize();
    el.addEventListener("input", capitalize);
  },
};
