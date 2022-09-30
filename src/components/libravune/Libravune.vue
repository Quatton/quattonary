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
  <section
    class="h-full overflow-auto flex justify-center p-8"
    ref="mainSection"
  >
    <div class="grid grid-cols-1 sm:grid-cols-4 gap-4">
      <article
        class="aspect-square rounded-md isolate w-[48vmin] sm:w-[16vmin]"
        v-for="book in books"
        v-bind:key="book.id"
        :style="{ backgroundColor: '#' + book.hex, color: '#' + book.hex }"
      >
        <a v-bind:href="'libravune/' + book.hex">
          <div
            class="w-full h-full cover flex items-center justify-center rounded-md shadow-md origin-left transition-transform duration-750"
            :style="{ backgroundColor: '#' + book.hex, color: '#' + book.hex }"
          >
            <p>
              {{
                capitalize(book.tags[0]?.name ? book.tags[0]?.name : "Error")
              }}
            </p>
          </div>
          <div class="darkener"></div>
        </a>
      </article>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use "src/global" as *;

  article {
    position: relative;

    .darkener {
      position: absolute;
      z-index: -1;
      inset: 0;
      background-color: hsl(0 0% 0% / 0.5);
    }

    &:hover .cover {
      transform: perspective(800px) rotateY(-45deg);
    }

    p {
      margin: auto;
      position: absolute;
      mix-blend-mode: difference;
    }
  }
</style>
