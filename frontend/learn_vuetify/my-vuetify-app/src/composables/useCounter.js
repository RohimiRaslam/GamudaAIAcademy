export function useCounter(initialValue = 0) {
  const count = ref(initialValue);

  const increment = () => count.value++;
  const decrement = () => count.value--;
  const resettter = () => (count.initialValue = 0);

  return { count, increment, decrement, resettter };
}
