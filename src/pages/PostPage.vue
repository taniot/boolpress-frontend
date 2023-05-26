<script>
import axios from 'axios';
export default {
    name: "PostPage",
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                posts: '/posts'
            },
            post: null,
            isError: false,
            errorMessage: null
        }
    },
    methods: {
        getPost() {
            axios.get(this.apiBaseUrl + this.apiUrls.posts + "/" + this.$route.params.slug)
                .then((response) => {
                    console.log(response);
                    this.post = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                    this.isError = true;
                    this.errorMessage = error.message;
                })
        }
    },
    created() {
        this.getPost();
    }

}
</script>


<template>
    <section v-if="post">
        <div class="container">
            <h1 class="mt-5 mb-3">{{ post.title }}</h1>
            <p>{{ post.content }}</p>
        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>


<style scoped></style>