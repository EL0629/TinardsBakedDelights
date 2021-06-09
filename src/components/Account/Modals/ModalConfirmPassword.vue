<template>
  <div class="row q-mb-md">
    <q-input
      clearable
      clear-icon="close"
      outlined
      placeholder="Enter Re-Type Password"
      :type="isPwd ? 'password' : 'text'"
      ref="confirmpassword"
      :value="confirmpassword"
      @input="$emit('update:confirmpassword', $event)"
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
  props: ["confirmpassword"],
};
</script>

<style lang="stylus"></style>
