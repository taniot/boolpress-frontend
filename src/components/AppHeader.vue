<script>
import CategoryList from './CategoryList.vue';

export default {
    name: "AppHeader",
    components: { CategoryList }
}
</script>


<template>
    <header>
        <div class="container">
            <div class="d-flex justify-content-between align-items-center">
                <div class="logo">Blog</div>
                <nav>
                    <ul class="list-unstyled m-0 p-0 gap-4 d-flex align-items-center">
                        <li>
                            <router-link :to="{ name: 'home' }" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'about' }" class="nav-link">
                                About
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'blog' }" class="nav-link">
                                Blog
                            </router-link>
                        </li>
                        <li>
                           <CategoryList />
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>


<style></style>