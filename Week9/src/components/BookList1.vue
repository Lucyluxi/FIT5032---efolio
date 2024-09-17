<template>
    <div class="container mt-5">
        <h1>Books with ISBN</h1>
        <ul>
            <li v-for="book in books" :key="book.id">
                <label class="me-2">ISBN: </label>
                <input type="text" class="me-4" v-model="book.isbn" />

                <label class="me-2">Name: </label>
                <input type="text" class="me-4" v-model="book.name" />
                <button @click="deleteBook(book.id)" class="me-1">Delete</button>
                <button @click="updateBook(book)">Update</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '@/firebase/init';
import { collection, query, orderBy, getDocs, doc, deleteDoc, updateDoc } from 'firebase/firestore';

export default{
    setup(){
        const books = ref([]);

        const fetchBooks = async () => {
            try{
                const q  = query(collection(db, 'books'), orderBy('isbn'))
                const querySnapshot = await getDocs(q)
                const booksArray = []
                querySnapshot.forEach((doc) => {
                    booksArray.push({id: doc.id, ...doc.data()})
                })
                books.value = booksArray
            }catch(error){
                console.error('Error fetching books: ', error)
            }
        };

        const deleteBook = async (id) => {
            try {
                await deleteDoc(doc(db, 'books', id))
                books.value = books.value.filter((book) => book.id !== id)
                console.log(`Book with ID ${id} deleted.`);
            } catch (error) {
                console.error('Error deleting book: ', error);
            }
        }

        const updateBook = async (book) => {
            try{
                const bookRef = doc(db, 'books', book.id)
                await updateDoc(bookRef, {isbn: book.isbn, name: book.name})

                console.log(`Book with ID ${book.id} updated.`);
            }catch(error){
                console.error('Error updating book: ', error);
            }
        }

        onMounted(() => {
            fetchBooks()
        });

        return{
            books,
            deleteBook,
            updateBook
        };
    }
}
</script>