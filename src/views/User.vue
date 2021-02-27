<template>
  <div class="user">
    <div class="user-title">
      <div class="avatar" :style="'background-image: url('+user.photoURL+')'"></div>
      <div class="texts">
        <h1>{{user.name}}</h1>
        <p v-if="myWhispers.length > 1">{{myWhispers.length}} whispers</p>
        <p v-else>{{myWhispers.length}} whisper</p>
      </div>
    </div>
    <div class="list">
      <Editor :currentUser="currentUser"/>
      <Item
        v-for="whisper in orderBy(myWhispers,'date',-1)"
        :key="whisper.id"
        :id="whisper.id"
        :uid="whisper.uid"
      />
    </div>
  </div>
</template>

<script>
import { db } from '../main'
import { auth } from '../main'
import firebase from 'firebase'
import Vue2Filters from 'vue2-filters'
import Item from '@/components/Item'
import Editor from '@/components/Editor'

export default {
  data () {
    return {
      user: {},
      myWhispers: [],
      currentUser: {}
    }
  },
  components: {
    Item,
    Editor
  },
  firestore () {
    return {
      user: db.collection('users').doc(this.$route.params.uid),
      myWhispers: db.collection('whispers').where('uid','==',this.$route.params.uid)
    }
  },
  created () {
    auth.onAuthStateChanged(user => {
      this.currentUser = user
    })
  },
  mixins: [Vue2Filters.mixin]
}
</script>
