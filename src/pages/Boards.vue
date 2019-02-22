<template>
  <q-page padding class="flex flex-center">
    <q-card inline style="width: 500px">
      <q-card-title>
        Boards
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-select
          multiple
          v-model="profile.favoriteBoards"
          :options="boards"
        />
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
  computed: {
    ...mapState({
      profile: state => state.profile,
      boards: state => state.boards,
    }),
    formattedOptions() {
      const options = this.boards.map(m => )
    }
  },
};
</script>
