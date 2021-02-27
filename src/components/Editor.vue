<template>
  <li class="item">
    <div class="user-box">
      <div class="avatar" :style="'background-image: url('+currentUser.photoURL+')'"></div>
      <p class="user-name">{{ currentUser.displayName }}</p>
    </div>
    <div class="editor">
      <textarea placeholder="new whisper">
      </textarea>
      <p class="message">Press Enter to Whisper</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['currentUser']
}
</script>
