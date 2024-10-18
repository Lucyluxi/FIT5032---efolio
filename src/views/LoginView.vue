<script>
// import { isAuthenticated } from '@/store';
// const router = useRouter();

// const formData = ref({
//     username: '',
//     password: ''
// })
import { ref } from 'vue'
import { mapActions } from 'vuex';
// import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapActions(['login']),
    clearForm() {
      this.username = '';
      this.password = '';
    },
    validateUsername() {
      const validUsername = "Lucy";
      const validPassword = "Lucylucy";

      if (this.username === validUsername && this.password === validPassword) {
        this.$store.commit('setAuthentication', true);
        return true;
      } else {
        this.$store.commit('setAuthentication', false);
        alert('Invalid username or password.');
        return false;
      }
    },
    submitForm() {
      if (this.validateUsername()) {
        this.submittedCards.push({ username: this.username, password: this.password });
        this.$router.push({ name: 'Home' });
        this.clearForm();
      }
    }
  },
  setup() {
    const submittedCards = ref([]);
    return {
      submittedCards,
    };
  }
};

// const clearForm = () => {
//     formData.value = {
//         username: '',
//         password: ''
//     }
// }

// const validUsername = "Lucy"
// const validPassword = "Lucylucy"

// const validateUsername = () => {
//     if(formData.value.username === validUsername && formData.value.password === validPassword){
//         isAuthenticated.value = true
//         return true;
//     }else{
//         isAuthenticated.value = false
//         alert('Invalid username or password.');
//         return false;
//     }
// }

// const submittedCards = ref([])

// const submitForm = () => {
//     if (validateUsername()) {
//     submittedCards.value.push({ ...formData.value });
//     router.push('/home');
//   }
//   clearForm();
// }
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 offset-md-4">
                <h1 class="text-center mb-4">Login</h1>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" v-model="username"/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="text" class="form-control" id="password" v-model="password"/>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary me-2">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style></style>