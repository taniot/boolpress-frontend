import { reactive } from "vue";

const store = reactive({
    // apiBaseUrl: 'http://127.0.0.1:8000/api'
    apiBaseUrl: import.meta.env.VITE_BACKEND_API_URL
})

export default store;