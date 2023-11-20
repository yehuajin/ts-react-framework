<script lang="ts">
  import Counter from './Counter1.svelte';
  let count: number = 0
  export let a: string; // 参数
  export let click: () => void; // 参数
  // const increment = () => {
  //   count += 1
  // }
  $:len = a.length;
</script>

<button class="button" on:click={click}>
  count is {count}
</button>
<div>{a}</div>
<div>{len}</div>
<Counter>12133</Counter>
<style>
  .button {
    background-color: rgb(0, 26, 255);
    width: 100px;
    height: 50px;
    color: white;
    font-size: 18px;
  }
</style>
