<script lang="ts">
  import { debounce } from "lodash";
  const PAGE_NUM = 10;
  const pages = [...Array(PAGE_NUM).keys()];
  let page = 0;
  const scrollHandler = (e) => {
    const target = e.target;
    page = parseFloat((target.scrollTop / target.clientHeight).toFixed(2));
  };
</script>

<template>
  <section
    class="fixed pointer-events-none flex items-center justify-center modal"
  >
    {#each [...pages].reverse() as pageId, idx}
      <div
        class="fixed w-96 h-96 bg-slate-600 flex items-center justify-center book-modal"
        style="rotate: x clamp(0deg, {((page - pageId) * 360).toFixed(
          2
        )}deg, 360deg); transform: translateZ({idx}px)"
      >
        <h1>
          {((page - pageId) * 360).toFixed(2)}
        </h1>
      </div>
    {/each}
  </section>
  <section
    class="no-scrollbar snap-mandatory overflow-y-scroll snap-y scroll-smooth grid place-items-center page-box"
    on:scroll={debounce(scrollHandler)}
  >
    {#each pages as pageId, idx}
      <article
        class="w-full h-screen flex items-center justify-center snap-center overflow-hidden
    even:bg-slate-700 odd:bg-slate-800"
        id={idx.toString()}
        on:scroll={(e) => console.log("shit")}
      >
        <h1>{pageId}</h1>
      </article>
    {/each}
  </section>
</template>

<style lang="scss">
  .modal {
    perspective: 800px;
  }

  section {
    width: 100%;
    height: 100vh;
  }

  section > div {
    transform-origin: top;
    transition: all 0.1s linear;
    transform-style: preserve-3d;
  }
</style>
