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
            currentPage: 1,
            apiBaseUrl: 'http://127.0.0.1:8000/api',
            showButton: true,
            apiUrls: {
                posts: '/posts'
            },
            posts: []
        }
    },
    methods: {
        getPosts() {

            axios.get(this.apiBaseUrl + this.apiUrls.posts, {
                params: {
                    page: this.currentPage
                }
            })
                .then((response) => {

                    const results = response.data.results.data ?? response.data.results;
                    const morePosts = response.data.results.next_page_url ?? null;

                    this.posts = [...this.posts, ...results];


                    if (!morePosts)
                        this.showButton = false;


                })
                .catch((error) => {
                    console.log(error);
                })
        },
        nextPage() {
            this.currentPage += 1;
            this.getPosts();
        }
    },
    created() {
        this.getPosts();
    }
}
</script>


<template>
    <div class="container my-4">
        <h1>Blog</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus error nesciunt repellendus illum doloribus ullam quos architecto, asperiores consectetur a non fugit aliquam obcaecati possimus vero autem soluta quae omnis.
        Cum, quibusdam aperiam atque voluptas nesciunt sapiente praesentium assumenda voluptatem corporis optio, dolore, veniam perspiciatis nemo. Natus delectus esse veniam, placeat ut consectetur, soluta sequi eum odio beatae aut illo.</p>
        <template v-if="posts.length">
            <div class="content row my-3 gy-4">
                <div class="col col-md-4" v-for="post in posts">
                    <CardPost :post="post" />
                </div>
            </div>
            <div class="text-center my-5" v-if="showButton"><button class="btn btn-primary" @click.prevent="nextPage">Mostra
                    altri</button></div>
        </template>

    </div>
</template>


<style scoped></style>