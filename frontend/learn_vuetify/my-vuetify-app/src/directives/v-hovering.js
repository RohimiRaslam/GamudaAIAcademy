export const coolHover = {
  // This runs when the element first appears
  mounted(el, binding) {
    // Get the color from binding or use default blue
    const hoverColor = binding.value || "#3498db";
    const originalColor = el.style.backgroundColor;

    el.addEventListener("mouseenter", () => {
      el.style.backgroundColor = hoverColor;
    });

    el.addEventListener("mouseleave", () => {
      el.style.backgroundColor = originalColor;
    });
  },
};
