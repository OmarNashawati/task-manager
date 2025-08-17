<script setup>
import { useModalStore } from "@/stores/modalStore";
const store = useModalStore();
</script>

<template>
  <div class="modal-wrapper" aria-modal="true" role="dialog" tabindex="-1">
    <div class="inner">
      <button @click="store.isOpen = false" class="btn close-btn">
        <i class="pi pi-times"></i>
      </button>
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  display: grid;
  place-items: center;
  color: #000;

  .inner {
    background-color: var(--popup-window);
    color: var(--on-popup);
    padding: 30px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    position: relative;
    max-width: 600px;
    width: 90%;

    h3 {
      font-size: 16px;
      font-weight: 700;
      line-height: 21px;
      margin-bottom: 20px;
    }

    .close-btn {
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      background-color: var(--popup-window);
      color: var(--text);
    }

    .form {
      display: flex;
      flex-direction: column;
      max-width: 100%;

      label {
        font-size: 12px;
        font-weight: 500;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
      }

      input,
      select,
      textarea {
        width: 100%;
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        letter-spacing: 0em;
        text-align: left;
        color: var(--input-text);
        background-color: var(--input);
        border-radius: 4px;
        padding: 8px 12px;
        margin-top: 5px;

        &::placeholder {
          color: var(--placeholder);
        }
      }

      .btn {
        width: fit-content;
        padding-inline: 23px;
      }
    }
  }
}
</style>
