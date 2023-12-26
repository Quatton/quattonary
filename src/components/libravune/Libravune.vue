<script lang="ts" setup>
  export interface Props {
    books: {
      timestamp: number;
      id: string;
      hex: string;
      tags: { name: string }[];
    }[];
  }
  import { onMounted, ref, toRefs } from "vue";
  import { IconAccount } from "@iconify-prerendered/vue-mdi";
  import { useAutoAnimate } from "@formkit/auto-animate/vue";

  const mainSection = ref();
  const search = ref();

  const props = defineProps<Props>();

  const { books } = toRefs(props);

  const [bookShelf] = useAutoAnimate();

  const capitalize = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  onMounted(() => {
    console.log(books.value[0]);
    setTimeout(() => {
      mainSection.value.scrollIntoView();
    }, 2000);
  });
</script>

<template>
  <div
    class="p-4 h-full overflow-hidden flex flex-col items-center"
    ref="mainSection"
  >
    <section class="w-full menu flex flex-1 justify-center rounded-t-lg">
      <input
        type="text"
        v-model="search"
        placeholder="Search"
        class="rounded-full px-4 py-1"
      />
    </section>
    <section class="container h-full p-4 overflow-y-auto flex justify-center">
      <div
        ref="bookShelf"
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full"
      >
        <article
          v-for="book in books"
          v-bind:key="book.id"
          class="border border-emerald-600 w-full md:w-80 md:aspect-[5/3] rounded-lg flex flex-col items-center md:flex-row bg-emerald-800 hover:bg-emerald-700"
        >
          <div
            class="cover aspect-square h-32 w-full rounded-t-lg md:h-full md:rounded-l-lg md:rounded-none flex items-center justify-center"
            :style="{ backgroundColor: '#' + book.hex }"
          ></div>
          <div class="flex flex-col p-4 leading-normal w-full">
            <h5
              class="mb-1 font-bold text-xl md:text-normal stracking-tight text-white"
            >
              {{ capitalize(book.tags[0]?.name || "error") }}
            </h5>
            <p class="mb-2 font-normal md:text-sm text-emerald-400">
              {{ new Date(book.timestamp).toDateString().slice(0, 15) }}
            </p>
            <div class="flex items-center mb-2">
              <IconAccount />
              <p class="ml-[.125rem] font-normal md:text-sm text-emerald-400">
                Quatton
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @use "sass:color";
  @use "src/global" as *;

  .menu {
    background-color: color.adjust($color-vue, $alpha: -0.7);
    padding: 1rem;
    input {
      background-color: color.adjust($color-vue, $alpha: -0.7);

      &::placeholder {
        color: #c6c6c6;
        font-style: italic;
      }
    }
  }

  .cover {
    p {
      mix-blend-mode: difference;
    }
  }
</style>
