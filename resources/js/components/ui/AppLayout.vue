<script setup>
import Navbar from '@/components/ui/Navbar.vue';
import Button from '@/components/ui/Button.vue';
</script>

<template>
  <div class="bg-black">
    <Navbar />
    <Button />
    <main>
      <slot/>
    </main>
    </div>
</template>