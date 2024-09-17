<template>
    <div class="container my-5">
        <h1>Books with ISBN > 1000 (Max: 5)</h1>
        <ul class="mb-4">
            <li v-for="book in books" :key="book.id">
                {{ book.name }} - ISBN: {{ book.isbn }}
            </li>
        </ul>
        <button class="me-2" @click="fetchBooks">Load and sort books by ISBN</button>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '@/firebase/init';
import { collection, query, where, getDocs, orderBy, limit } from 'firebase/firestore';

export default{
    setup(){
        const books = ref([]);

        const fetchBooks = async () => {
            try{
                const q  = query(collection(db, 'books'), where('isbn', '>', 1000), orderBy('isbn'), limit(5))
                const querySnapshot = await getDocs(q)

                console.log('Query Snapshot Size:', querySnapshot.size);

                const booksArray = []
                querySnapshot.forEach((doc) => {
                    booksArray.push({id: doc.id, ...doc.data()})
                })
                books.value = booksArray
            }catch(error){
                console.error('Error fetching books: ', error)
            }
        };

        onMounted(() => {
            fetchBooks()
        });

        return{
            books,
            fetchBooks
        };
    }
}
</script>