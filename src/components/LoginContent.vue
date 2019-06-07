<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <p>{{error}}</p>
            <b-form-group
              id="input-group-1"
              label="Email address:"
              label-for="input-1"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter your email address"
                value="chinh@stringee.com"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">

              <b-form-input
                id="input-2"
                v-model="form.password"
                type="password"
                placeholder="Enter password"
                value="12346587"
              ></b-form-input>
            </b-form-group>


            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
          <b-card class="mt-3" header="Form Data Result">
            <pre class="m-0">{{ form }}</pre>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
  import store from '@/store'
  export default {
    data() {
      return {
        name: 'LoginContent',
        form: {
          email: '',
          password: ''
        },
        show: true,
        error: '',
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        return fetch('https://api.stringeex.com/v1/account', {
          method: 'POST',
          headers: {
            'X-STRINGEE-AUTH': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhY2NvdW50X2lkIjoiQUM2S1FGMFdCUCIsInBvcnRhbF9pZCI6IlBUR1JGS0Y2N1EiLCJhY2NvdW50X3BvcnRhbF9pZCI6IlBBTkpESzRRTDEiLCJleHAiOjE1OTA4MzM2MzcsImtleV9pZCI6IktFQUtPNVlIVjgifQ.9YyYrhIFs10UgtHPiJrbmK8AwQ35hYAEyK5xh7xcW98'
          },
          body: JSON.stringify(this.form)
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.msg === 'Success') {
              store.commit('saveUser', data)
              this.$router.push('/home')
            } else if (data.msg === 'Invalid email or password') {
              this.error = data.msg
            } else {
              this.$router.push('/')
            }
          });
        //
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
