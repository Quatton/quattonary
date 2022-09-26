<template>
  <header
    class="fixed w-full h-16 flex items-center px-4 backdrop-blur-lg shadow-md"
  >
    <a href="/">
      <h2 class="quatton text-gradient">Quattonary</h2>
    </a>
  </header>
</template>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Kumar+One+Outline&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700&family=Mitr:wght@200;300;400;500&family=Ms+Madi&display=swap");

  :root {
    --astro-gradient: linear-gradient(
      -90deg,
      var(--color-sea),
      var(--color-sun)
    );
  }

  .quatton {
    font-family: "Ms Madi", serif;
    font-weight: 600;
    font-size: 2rem;
  }

  .text-gradient {
    font-weight: 900;
    background-image: var(--astro-gradient);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 100%;
    background-position-x: 100%;
    border-radius: 0.4rem;
    animation: pulse 4s cubic-bezier(0.76, 0.24, 0.24, 0.76) infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      background-position-x: 0%;
    }
    50% {
      background-position-x: 80%;
    }
  }
</style>
