<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 offset-md-4 text-center mb-5">
                <h1>Book Counter</h1>
                <button @click="getBookCount">Get Book Counter</button>
                <p v-if="count !== null">Total number of books: {{ count }}</p>
                <p v-if="error">{{ error }}</p>
            </div>
            <div class="col-md-4 offset-md-4 text-center mt-5">
                <h1>Add Book</h1>
                <form @submit.prevent="addBook">
                    <div class="mb-3">
                        <label for="isbn" class="me-2">ISBN: </label>
                        <input type="text" id="isbn" v-model="formData.isbn" required />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="me-2">Name: </label>
                        <input type="text" id="name" v-model="formData.name" required/>
                    </div>
                    <button type="submit">Add Book</button>
                </form>
                <p v-if="success">{{ success }}</p>
                <p v-if="error2">{{ error2 }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            formData: {
                isbn: '',
                name: ''
            },
            count: null,
            success: null,
            error: null,
            error2: null
        };
    },
    methods: {
        async getBookCount() {
            try {
                const response = await axios.get('https://countbooks-r7ejfwewqq-uc.a.run.app');
                this.count = response.data.count;
                this.error = null;
            } catch (error) {
                console.error('Error fetching book count: ', error);
                this.count = null;
                this.error = 'Error fetching book count';
            }
        },
        async addBook() {
            try {
                const response = await axios.post('https://addbook-r7ejfwewqq-uc.a.run.app', {
                    isbn: this.formData.isbn,
                    name: this.formData.name
                });
                this.success = 'Book added successfully!';
                this.error = null;
                this.formData.isbn = '';
                this.formData.name = '';
            } catch (error) {
                console.error('Error adding book: ', error);
                this.success = null;
                this.error = 'Error adding book';
            }
        }
    }
}
</script>
