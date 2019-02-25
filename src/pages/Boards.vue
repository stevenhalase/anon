<template>
  <q-page padding class="flex">
    <q-card inline style="width: 100%">
      <q-card-title>
        Favorite Boards
        <div slot="right" class="row items-center">
          <q-btn @click="handleBoardsChange" round color="secondary">
            <q-icon name="save" />
          </q-btn>
        </div>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-select
          multiple
          chips
          v-model="localFavoriteBoards"
          :options="formattedOptions"
          @change="handleBoardsChange"
          class="q-ma-sm"
        />
        <q-list
          highlight
          class="q-ma-sm">
          <q-item
            v-for="board of profile.favoriteBoards"
            :key="board.board"
            :to="{ name: 'board', query: { b: board.board } }">
            <q-item-main :label="`${board.board} ${board.title}`" />
          </q-item>
        </q-list>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Boards',
  data() {
    return {
      localFavoriteBoards: [],
    };
  },
  mounted() {

  },
  computed: {
    ...mapState({
      profile: state => state.profile,
      boards: state => state.boards,
    }),
    formattedOptions() {
      const options = this.boards.map((b) => {
        return { label: `${b.board} ${b.title}`, value: b.board };
      });
      return options;
    },
    formattedFavoriteBoards() {
      const favoriteBoards = this.profile.favoriteBoards.map((b) => {
        return { label: `${b.board} ${b.title}`, value: b.board };
      });
      return favoriteBoards;
    },
  },
  methods: {
    handleBoardsChange() {
      const mappedBoards = this.localFavoriteBoards.map((b) => {
        return this.boards.find(fullBoard => b === fullBoard.board);
      });
      this.$store.dispatch('SET_FAVORITE_BOARDS', mappedBoards);
    },
  },
};
</script>
