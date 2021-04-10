<template>
  <div :class="currClass">
    <button class="close-popup" @click.stop="$emit('close')">X</button>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    currClass: String,
  },
};
</script>

