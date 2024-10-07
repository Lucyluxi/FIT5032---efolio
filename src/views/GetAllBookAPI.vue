<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 offset-md-4 text-center mb-5">
                <pre>{{ jsondata }}</pre>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            jsondata: null,
            error: null,
        };
    },
    mounted(){
        this.getAllBookAPI();
    },
    methods: {
        async getAllBookAPI() {
            try {
                const response = await axios.get('https://allbooks-r7ejfwewqq-uc.a.run.app');
                this.jsondata = response.data;
                this.error = null;
            } catch (error) {
                console.error('Error fetching book count: ', error);
                this.count = null;
                this.error = 'Error fetching book count';
            }
        }
    }
}
</script>
