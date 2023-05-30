<script>
import axios from 'axios';
import store from '../store';
export default {
    name: "PostPage",
    data() {
        return {
            store,
            post: null,
            isError: false,
            errorMessage: null,
            formData: {
                author: '',
                content: ''
            }
        }
    },
    methods: {
        sendComment() {
            console.log(this.formData.author);
            console.log(this.formData.content);
            console.log(this.post.id);

            const data = {
                author: this.formData.author,
                content: this.formData.content,
                post_id: this.post.id
            };

            axios.post(`${this.store.apiBaseUrl}/comments`, data)
                .then((response) => {
                    console.log(response)

                    if(response.status === 201){ //created
                        this.post.comments.push(response.data)
                    } 


                })
                .catch((error) => {
                    console.log(error)
                });


        },
        commentDate(comment_date) {
            const commentDate = new Date(comment_date);
            return commentDate.toLocaleString();
        },
        getPost() {
            // axios.get(this.apiBaseUrl + this.apiUrls.posts + "/" + this.$route.params.slug)
            axios.get(`${this.store.apiBaseUrl}/posts/${this.$route.params.slug}`)
                .then((response) => {
                    console.log(response);
                    this.post = response.data.results;
                })
                .catch((error) => {
                    console.log(error);

                    if (error.response.status === 404) {
                        console.log('redirect')
                        this.$router.push({ name: 'not-found' });
                    }

                    this.isError = true;
                    this.errorMessage = error.message;

                })
        }
    },
    created() {
        this.getPost();

        this.$watch(
            () => this.$route.params,
            (toParams, previousParams) => {
                console.log({ toParams })
                console.log({ previousParams })
                this.getPost();
            }
        )
    }

}
</script>


<template>
    <section v-if="post">
        <div class="container">
            <h1 class="mt-5 mb-3">{{ post.title }}</h1>
            <h2>
                <router-link :to="{ name: 'category', params: { slug: post.category.slug } }" class="nav-link">
                    Category: {{ post.category.name }}
                </router-link>
            </h2>
            <p>{{ post.content }}</p>
            <hr>
            <p>
                <router-link :to="{ name: 'post', params: { slug: 'velit-commodi-voluptas-sed' } }" class="nav-link">
                    Fake Post
                </router-link>
            </p>
            <hr>
            <div class="my-3" v-show="post.tags.length">
                <span class="badge text-bg-warning me-1" v-for="tag in post.tags">{{ tag.name }}</span>
            </div>

            <hr>

            <div class="my-4">
                <h3>Commenti</h3>
                <ul v-if="post.comments.length">
                    <li v-for="comment in post.comments">
                        <div>
                            <h4>{{ comment.author ?? 'Utente Anonimo' }}</h4>
                            <p>{{ commentDate(comment.created_at) }}</p>
                            <p>{{ comment.content }}</p>
                        </div>
                    </li>
                </ul>
                <div>
                    <h3>Nuovo commento</h3>
                    <form @submit.prevent="sendComment">
                        <div class="mb-3">
                            <label for="author" class="form-label">Autore</label>
                            <input type="text" class="form-control" id="author" v-model="formData.author">
                        </div>
                        <div class="mb-3">
                            <label for="content" class="form-label">Testo</label>
                            <textarea class="form-control" id="content" rows="3" v-model="formData.content"></textarea>
                        </div>
                        <button class="btn btn-primary">Invia commento</button>
                    </form>
                </div>
            </div>


        </div>
    </section>
    <section v-if="isError">
        <div class="container">
            <p>{{ errorMessage }}</p>
        </div>
    </section>
</template>


<style scoped></style>