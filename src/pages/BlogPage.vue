<script>
import axios from 'axios';
import CardPost from '../components/CardPost.vue';
export default {
    name: "BlogPage",
    components: {
        CardPost
    },
    data() {
        return {
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            apiUrls: {
                posts: '/posts'
            },
            posts: []
        }
    },
    methods: {
        getPosts() {
            axios.get(this.apiBaseUrl + this.apiUrls.posts)
                .then((response) => {
                    console.log(response);
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
    <section>
        <h1 class="mt-5 mb-3">Blog</h1>
        <main>
            <div class="container">
                <div class="row my-4 gy-4">
                    <div class="col col-md-4" v-for="post in posts">
                        <CardPost :post="post" />
                    </div>
                </div>
            </div>
        </main>
    </section>
</template>


<style scoped></style>