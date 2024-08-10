<template>
  <div>
    <div class="flex items-center my-4 mt-12 lg:mt-32">
      <h3 class="text-xl lg:text-5xl font-medium text-[var(--color-heading)]">
        <slot name="heading"></slot>
      </h3>
    </div>
    <slot></slot>
  </div>
</template>
