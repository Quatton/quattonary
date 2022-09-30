<script lang="ts" setup>
  import { onMounted, ref, toRefs } from "vue";

  const mainSection = ref();

  const props = defineProps({
    books: Array,
  });

  const { books } = toRefs(props);

  const capitalize = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);
  onMounted(() => {
    console.log(books[0]);
    setTimeout(() => {
      mainSection.value.scrollIntoView();
    }, 2000);
  });
</script>

<template>
  <section class="h-full grid grid-cols-4" ref="mainSection">
    <article
      class="aspect-square rounded-md isolate"
      v-for="book in books"
      v-bind:key="book.id"
      :style="{ backgroundColor: '#' + book.hex, color: '#' + book.hex }"
    >
      <a v-bind:href="'libravune/' + book.hex">
        <div
          class="w-full h-full cover flex items-center justify-center rounded-md shadow-md origin-left transition-[rotate] duration-750"
          :style="{ backgroundColor: '#' + book.hex, color: '#' + book.hex }"
        >
          <p>
            {{ capitalize(book.tags[0]?.name ? book.tags[0]?.name : "Error") }}
          </p>
        </div>
        <div class="darkener"></div>
      </a>
    </article>
  </section>
</template>

<style lang="scss" scoped>
  @use "src/global" as *;

  article {
    position: relative;
    width: 16vmin;
    perspective: 800px;

    .darkener {
      position: absolute;
      z-index: -1;
      inset: 0;
      background-color: hsl(0 0% 0% / 0.5);
    }

    &:hover .cover {
      rotate: y -30deg;
    }

    p {
      margin: auto;
      position: absolute;
      mix-blend-mode: difference;
    }
  }
</style>
