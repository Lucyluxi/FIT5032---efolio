<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-4 offset-md-4 text-center">
                <h1 class="mb-4">Sign in</h1>
                <p><input type="text" placeholder="Email" v-model="email"/></p>
                <p><input type="password" placeholder="Password" v-model="password"/></p>
                <p><label class="switch">
                    <input type="checkbox" class="me-2" v-model="isAdmin">
                    <span class="slider">I'm an admin</span>
                  </label></p>
                <p><button @click="signin">Sign in via Firebase</button></p>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { mapActions } from 'vuex';
import { isAdmin } from '@firebase/util';

export default {
  name: 'YourComponentName',
  data() {
    return {
      email: ref(""),
      password: ref(""),
      isAdmin: ref(false)
    }
  },
  methods: {
    ...mapActions(['login']),
    signin() {
      const auth = getAuth()
      signInWithEmailAndPassword(auth, this.email, this.password)
      .then(async (data) => {
          const idTokenResult = await auth.currentUser.getIdTokenResult();

          if (this.isAdmin && idTokenResult.claims.admin) {
            console.log("User is an Admin");
            console.log("Firebase Register Successfully!")  
            
            this.$store.commit('setAuthentication', true);
            this.$store.commit('setUser', {email: this.email, role:'admin'})

            this.$router.push("/home")
          } else if(!this.isAdmin && !idTokenResult.claims.admin){
            console.log("User is a regular user");
            console.log("Firebase Register Successfully!")

            this.$store.commit('setAuthentication', true);
            this.$store.commit('setUser', {email: this.email, role:'user'})

            this.$router.push("/home")
          }else{
            console.log("Admin rights mismatch or incorrect role selection");
            this.$store.commit('setAuthentication', false);
            alert('Login failed');
          } 
          
          console.log(auth.currentUser)
      }).catch((error) => {
          this.$store.commit('setAuthentication', false);
          console.log(error.code)
      })
    }
  }
}
</script>