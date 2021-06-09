<template>
  <div class="row q-mb-md">
    <q-input
      clearable
      clear-icon="close"
      outlined
      placeholder="Enter New Password"
      :type="isPwd ? 'password' : 'text'"
      ref="password"
      :value="password"
      @input="$emit('update:password', $event)"
      :dense="dense"
      debounce="300"
      class="user-input col"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPwd: true,
      text: "",
      dense: false
    };
  },
  props: ["password"],
};
</script>

<style lang="stylus"></style>
