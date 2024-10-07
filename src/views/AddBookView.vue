<template>
    <div class="container nt-5">
        <div class="row">
            <div class="col-md-4 offset-md-4 text-center">
                <h1>Add Book</h1>
                <form @submit.prevent="addBook">
                    <div class="mb-3">
                        <label for="isbn" class="me-2">ISBN: </label>
                        <input type="text" id="isbn" v-model="isbn" required />
                    </div>
                    <div class="mb-3">
                        <label for="name" class="me-2">Name: </label>
                        <input type="text" id="name" v-model="name" required/>
                    </div>
                    <button type="submit">Add Book</button>
                </form>
            </div>
            <div class="col-md-8 offset-md-2 text-center mt-5">
                <BookList1 />
            </div>
            <div class="col-md-8 offset-md-2 text-center mt-5">
                <BookList />
            </div>
        </div>
    </div>
</template>

<script>
import db from '@/firebase/init';
import { ref } from 'vue';
import { collection, addDoc } from 'firebase/firestore';

import BookList from '@/components/BookList.vue';
import BookList1 from '@/components/BookList1.vue';

export default{
    setup(){
        const isbn = ref('')
        const name = ref('')

        const addBook = async () => {
            try{
                const isbnNumber = Number(isbn.value)
                if(isNaN(isbnNumber)){
                    alert('ISBN must be a valid number')
                    return;
                }

                await addDoc(collection(db, 'books'), {
                    isbn: isbnNumber,
                    name: name.value
                });

                isbn.value = ''
                name.value = ''
                alert('Book added successfully!')
            }catch(error){
                console.error('Error adding book: ', error)
            }
        }
        return{
            isbn,
            name,
            addBook
        }
    },
    components: {
        BookList,
        BookList1
    }
}
</script>