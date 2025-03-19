<script setup lang="ts">

</script>

<template>
  <div class="content">
    <div class="badge">
      Netbook community
    </div>

    <h1 class="title">
      Your Solutions For Community!
    </h1>

    <p class="description">
      More than 2 billion people in over countries use socibook to stay in
      touch with friends & family.
    </p>

    <div class="buttons">
      <button class="button button--primary">
        About More
      </button>

      <button class="button button--outline">
        Invite Friend
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  position: relative;
  width: 100%;
  max-width: 519px;
  margin-left: 135px;
  padding-top: 100px;
}

.title {
  margin-top: 56px;
  font-weight: 700;
  color: #0a093d;
  font-size: 56px;
  line-height: 66px;
  max-width: 515px;
}

.description {
  margin-top: 30px;
  font-weight: 400;
  color: #656464;
  font-size: 18px;
  line-height: 28px;
  max-width: 491px;
}

.buttons {
  display: flex;
  gap: 16px;
  margin-top: 38px;
}

.badge {
  background-color: rgba(33, 123, 244, 0.1);
  color: #217bf4;
  border-radius: 8px;
  padding: 12px 30px;
  font-weight: 500;
  font-size: 12px;
  display: inline-block;

  &:hover {
    background-color: rgba(33, 123, 244, 0.2);
  }
}
</style>