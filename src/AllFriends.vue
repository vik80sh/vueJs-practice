<template >
  <div class="friends-wrapper">
    <h3>All Friends :)</h3>
    <div v-for="(friend,index) in friends" :key="index" class="friends-wrapper">
      <p @click="unFriend(friend.name)">
        <span>{{friend.name}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllFriends",
  props: ["friends"],
  data() {
    return {};
  },
  methods: {
    unFriend(name) {
      this.$emit("delete", { name });
    }
  }
};
</script>

<style lang="scss" scoped>
.friends-wrapper {
  float: left;
  padding-left: 20px;
  width: 50%;
  .friends-wrapper {
    float: left;
    padding-left: 30px;
    p {
      margin: 8px auto;
      cursor: pointer;
    }
  }
}
</style>