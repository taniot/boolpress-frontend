<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'CategoryList',
    data() {
        return {
            store,
            currentCategory: '',
            categories: []
        }
    },
    methods: {
        getCategories() {
            axios.get(`${this.store.apiBaseUrl}/categories`)
                .then((response) => {
                    console.log(response);
                    this.categories = response.data.results;

                })
                .catch((error) => {
                    console.log(error);
                })
        },
        changePage(){
            //console.log(this.currentCategory);
            this.$router.push({name: 'category', params:{slug: this.currentCategory}});
        }
    },
    created(){
        this.getCategories();
    }
}
</script>
<template>
    <select class="form-select" v-if="categories.length > 0" @change="changePage" v-model="currentCategory">
        <option :value="category.slug" v-for="category in categories">{{ category.name }}</option>
    </select>
</template>