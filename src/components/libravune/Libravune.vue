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
      class="aspect-square rounded-md flex items-center justify-center"
      v-for="book in books"
      v-bind:key="book.id"
      :style="{ backgroundColor: '#' + book.hex, color: '#' + book.hex }"
    >
      <p>{{ capitalize(book.tags[0].name) }}</p>
    </article>
  </section>
</template>

<style lang="scss" scoped>
  @use "src/global" as *;

  article {
    position: relative;
    width: 16vmin;
    p {
      margin: auto;
      position: absolute;
      mix-blend-mode: difference;
    }
  }
</style>
