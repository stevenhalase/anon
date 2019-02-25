<template>
  <q-page padding class="flex">
    <Post
      v-for="(thread, ind) of profile.currentBoard.threads"
      :key="ind"
      :board="board"
      :post="thread.posts[0]" />
  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex';
import Post from '../components/Post.vue';

export default {
  name: 'Board',
  props: {
    board: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      profile: state => state.profile,
    }),
  },
  methods: {
    getBoard() {
      this.loaded = false;
      this.$store.commit('SET_CURRENT_BOARD', { board: this.board, threads: [] });
      this.$store.commit('SET_CURRENT_THREAD', {});
      this.$store.dispatch('GET_BOARD', { board: this.board })
        .then(() => {
          this.loaded = true;
        });
    },
  },
  watch: {
    board: {
      handler() {
        this.getBoard();
      },
      immediate: true,
    },
  },
  components: {
    Post,
  },
};
</script>
