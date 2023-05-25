<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  data() {
    return {
      apiBaseUrl: 'http://127.0.0.1:8000/api',
      apiUrls: {
        posts: '/posts'
      },
      posts: []
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  methods: {
    getPosts() {
      axios.get(this.apiBaseUrl + this.apiUrls.posts)
      .then((response) => {
        this.posts = response.data.results;
      })
      .catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getPosts();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain :data="posts" />
  <AppFooter />
</template>


<style lang="scss">
//versione 1 - inclusione via app.vue
// @use './assets/scss/main.scss' as *;
</style>
