<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'CategoryList',
    data() {
        return {
            store,
            categories: []
        }
    },
    methods: {
        getCategories() {
            axios.get(`${this.store.apiBaseUrl}/categories`)
                .then((response) => {
                    this.categories = response.data.results;
                })
                .catch((error) => {
                    console.log(error);
                })
        },
   
    },
    created() {
        this.getCategories();
    },
}
</script>
<template>
    <div class="dropdown">
        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
           Seleziona una categoria
        </button>
        <ul class="dropdown-menu">
            <li :key="category.id" v-for="category in categories">
                <router-link :to="{name :'category', params:{slug: category.slug}}" class="dropdown-item">{{ category.name }}</router-link>

            </li>
        </ul>
    </div>

</template>