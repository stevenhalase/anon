<template>
  <div id="q-app">
    <router-view />
    <q-ajax-bar color="tertiary" />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('GET_PROFILE');
    this.$store.dispatch('GET_BOARDS');
  },
  computed: {
    ...mapState({
      profile: state => state.profile,
    }),
    key() {
      const board = this.profile.currentBoard ? this.profile.currentBoard.board : '';
      const thread = this.profile.currentThread ? this.profile.currentThread.no : '';
      return `${board}${thread}`;
    },
  },
};
</script>

<style>
</style>
