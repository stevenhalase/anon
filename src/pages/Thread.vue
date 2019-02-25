<template>
  <q-page padding class="flex">
    <Post
      v-for="(post, ind) of profile.currentThread.posts"
      :key="ind"
      :board="board"
      :post="post"
      :isReply="true" />
  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex';
import Post from '../components/Post.vue';

export default {
  name: 'Thread',
  props: {
    board: {
      type: String,
      required: true,
    },
    threadNumber: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      profile: state => state.profile,
    }),
  },
  mounted() {
    this.getThread();
  },
  methods: {
    getThread() {
      this.loaded = false;
      this.$store.commit('SET_CURRENT_BOARD', { board: this.board, threads: [] });
      this.$store.commit('SET_CURRENT_THREAD', {});
      this.$store.dispatch('GET_THREAD', { board: this.board, threadNumber: this.threadNumber })
        .then(() => {
          this.loaded = true;
        });
    },
  },
  watch: {
    threadNumber: {
      handler() {
        this.getThread();
      },
      immediate: true,
    },
  },
  components: {
    Post,
  },
};
</script>
