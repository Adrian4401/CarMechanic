<template>
  <div>
    <div class="flex items-center my-4">
      <!-- <i class="flex place-items-center	place-content-center w-8 h-8 text-[var(--color-text)]">
        <slot name="icon"></slot>
      </i> -->
      <h3 class="text-xl lg:text-5xl font-medium text-[var(--color-heading)]">
        <slot name="heading"></slot>
      </h3>
    </div>
    <slot></slot>
  </div>
</template>
