<script>
import axios from 'axios';
import store from '../store';
import CardPost from '../components/CardPost.vue';
export default {
    name: "CategoryPage",
    components: {
        CardPost
    },
    data() {
        return {
            store,
            category: null
        }
    },
    methods: {
        getCategory() {
            axios.get(`${this.store.apiBaseUrl}/categories/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    this.category = response.data.results;
                })
        }
    },
    created() {
        this.getCategory();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({toParams})
                console.log({previousParams})
                this.getCategory();
            }
        )
    }
}
</script>


<template>
    <section v-if="category">
        <div class="container">
            <h1 class="mt-5 mb-3">Category Page: {{ category.name }}</h1>

            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="post in category.posts">
                    <CardPost :post="post" />
                </div>
            </div>


        </div>
    </section>
</template>


<style scoped></style>