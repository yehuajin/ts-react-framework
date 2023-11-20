<script lang="ts">
  import Counter from './Counter1.svelte';
  let count: number = 0
  export let a: Number; // 参数
  export let click: () => void; // 参数
  // const increment = () => {
  //   count += 1
  // }
</script>

<button on:click={click}>
  count is {count}
</button>
<div>{a}</div>
<Counter>12133</Counter>
