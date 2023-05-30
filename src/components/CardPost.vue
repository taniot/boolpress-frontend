<template>
    <div class="card  h-100">
        <img v-if="post.image" :src="post.image" class="card-img-top" alt="...">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ post.title }}</h5>
          
            <p v-if="post.content" class="card-text">{{ post.content.substring(0, this.contentLenght) + '...' }}</p>
    

            <router-link :to="{ name: 'post', params: { slug: post.slug } }" class="btn btn-warning mt-auto">
                Leggi articolo
            </router-link>


        </div>
    </div>
</template>
 
 
<script>
export default {
    name: 'CardPost',
    data() {
        return {
            contentLenght: 250,
            imageUrl: 'http://127.0.0.1:8000/storage/'
        }
    },
    props: {
        post: Object
    }
}
</script>
 
<style></style>