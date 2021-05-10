<template>
  <form>
    <div class="row q-mb-lg q-mt-sm">
      <a
        href="javascript:;"
        v-bind:class="showForgotPassword"
        class="forgotPasswordLink text-subtitle1"
        @click="$root.$emit('showForgotPassword')"
      >
        Forgot Password?
      </a>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      showForgotPassword: false
    };
  }
};
</script>

<style lang="stylus">
.forget-btn {
    background: #f7b205;
}

.forgotPasswordLink {
    color: #0861a3;
    text-decoration: none;
}

.forgotPasswordLink:hover{
    color: #1b95e0;
}
</style>
