<template>
  <div>
    <h1>Welcome <span>{{userName}}</span></h1>
    <form @submit="onSubmit" class="container">
      <div class="form-group">
        <label for="name" >Name</label>
        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" v-model="form.name">
      </div>
      <div class="form-group">
        <label for="jobTitle">Job Title</label>
        <input type="text" class="form-control" id="jobTitle" placeholder="Enter job title" v-model="form.job_title">
      </div>
      <div class="form-group">
        <label for="company">Company</label>
        <input type="text" class="form-control" id="company" placeholder="Enter company" v-model="form.company">
      </div>
      <div class="form-group">
        <label for="avatar">Avatar</label>
        <input type="text" class="form-control" id="avatar" placeholder="Input your avatar" v-model="form.avatar">
      </div>
      <div class="form-group">
        <label for="about">About</label>
        <textarea type="text" class="form-control" id="about" placeholder="About yourself" v-model="form.about"></textarea>
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

</template>

<script>
  import store from '@/store'
    export default {
      props: {
        email:String
        },
      name: "Home",
      computed: {
        userName() {
          return this.$store.state.userName
        }
      },
      data() {
        return {
          form: {
            name: '',
            job_title: '',
            company: '',
            avatar: '',
            about: ''
          },
          errors: []
        }
      },
      methods: {
        onSubmit(evt) {
          evt.preventDefault()
          return fetch('https://api.stringeex.com/v1/contact', {
            method: 'POST',
            headers: {
              'X-STRINGEE-AUTH': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoiQUM2S1FGMFdCUCIsInBvcnRhbF9pZCI6IlBUR1JGS0Y2N1EiLCJhY2NvdW50X3BvcnRhbF9pZCI6IlBBTkpESzRRTDEiLCJleHAiOjE1OTA4MzM2MzcsImtleV9pZCI6IktFQUtPNVlIVjgifQ.9YyYrhIFs10UgtHPiJrbmK8AwQ35hYAEyK5xh7xcW98'
            },
            body: JSON.stringify(this.form)
          })
            .then(res => res.json())
            .then(data => {
              console.log(JSON.stringify(this.form))
              console.log(this.form)
              if (data.msg === 'Success') {
                store.commit('saveContact', this.form)
                this.$router.push('/contact')
              } else {
                console.log(data.msg)
              }
            });
          //
        },
        addAvatar() {

        }
      }
    }

</script>

<style scoped>

</style>
