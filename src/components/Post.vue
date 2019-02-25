<template>
  <q-card
    :id="`p${post.no}`"
    style="width: 100%"
    class="q-ma-sm">
    <q-card-title>
      <div>
        <img
          v-if="post.country"
          :src="`https://s.4cdn.org/image/country/${post.country.toLowerCase()}.gif`"
          :title="post.country_name"/>
        <q-chip
          v-if="post.name"
          small
          color="tertiary">
          {{ `${post.name.substring(0, 9)}${post.name.length > 10 ? '...' : ''}` }}
        </q-chip>
        <q-chip
          v-if="post.id"
          small
          color="tertiary">
          {{ post.id }}
        </q-chip>
        <q-chip
          v-if="post.no"
          small
          color="tertiary">
          {{ post.no }}
        </q-chip>
      </div>
    </q-card-title>
    <q-card-separator />
    <q-card-main>
      <img
        v-if="post.tim"
        :width="post.tn_w"
        :height="post.tn_h"
        :src="`https://i.4cdn.org/${board}/${post.tim}s.jpg`"
        @click="imageOpen = true">
      <div
        v-if="post.sub"
        class="post-sub">
        {{ post.sub }}
      </div>
      <div
        v-if="post.com"
        v-html="post.com"
        class="post-comment" />
    </q-card-main>
    <q-card-separator />
    <q-card-actions
      v-if="!isReply"
      align="between">
      <div>
        <q-chip
          small
          color="tertiary">
          {{ post.replies }}
        </q-chip>
        <q-chip
          small
          color="tertiary">
          {{ post.images }}
        </q-chip>
      </div>
      <q-btn
        flat
        label="View Thread"
        :to="{ name: 'thread', query: { b: board, t: post.no } }" />
    </q-card-actions>
    <q-modal
      v-if="post.tim"
      v-model="imageOpen">
      <q-btn
        color="primary"
        @click="imageOpen = false"
        label="Close"
      />
      <img :src="`https://i.4cdn.org/${board}/${post.tim}${post.ext}`" />
    </q-modal>
  </q-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'post',
  data() {
    return {
      imageOpen: false,
    };
  },
  props: {
    board: {
      type: String,
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
    isReply: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapState({
      profile: state => state.profile,
    }),
  },
};
</script>
