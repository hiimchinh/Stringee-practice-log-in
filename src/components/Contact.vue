<template>
  <div>
    <ul>
      <li>Name: {{getContact.name}}</li>
      <li>Job Title: {{getContact.job_title}}</li>
      <li>Company: {{getContact.company}}</li>
      <li>Avatar: {{getContact.avatar}}</li>
      <li>About: {{getContact.about}}</li>
    </ul>
  </div>
</template>

<script>
  import store from '@/store'
    export default {
      name: "Contact",
      computed: {
        getContact() {
          console.log(store.state.contact)
          return store.state.contact
        }
      }
    }
</script>

<style scoped>

</style>
