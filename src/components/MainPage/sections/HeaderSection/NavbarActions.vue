<script setup lang="ts">

</script>

<template>
  <div class="actions">
    <div class="actions__search">
      <div class="actions__search-content">
            <span class="actions__search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#686868" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
        <span class="actions__search-text">Search Hare...</span>
      </div>
      <img
          class="actions__search-line"
          alt="Line"
          src="/line-2.svg"
      />
    </div>

    <button class="button button--primary button--small">
      Log in
    </button>
  </div>
</template>

<style scoped lang="scss">
.actions {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 42px;

  &__search {
    position: relative;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }

  &__search-content {
    display: flex;
    align-items: center;
  }

  &__search-icon {
    height: 12px;
    width: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
  }

  &__search-text {
    margin-left: 8px;
    font-weight: 400;
    color: #686868;
    font-size: 12px;
  }

  &__search-line {
    width: 105px;
    height: 1px;
    margin-top: 7px;
  }
}
</style>