<template>
    <main>
        <div class="container">
            <div class="row my-4 gy-4">
                <div class="col col-md-4" v-for="post in data">
                    <div class="card">
                        <img v-if="post.image" :src="post.image" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ post.title }}</h5>
                            <p v-if="post.content" class="card-text">{{ post.content.substring(0,this.contentLenght) + '...' }}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </main>
</template>
 
 
<script>
export default {
    name: 'AppMain',
    data(){
        return {
            contentLenght:250,
            imageUrl: 'http://127.0.0.1:8000/storage/'
        }
    },
    props: {
        data: Object
    }
}
</script>
 
<style></style>