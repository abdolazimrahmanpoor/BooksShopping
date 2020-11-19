<template>
  <div>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <form class="box">
                <div class="field has-text-centered">
                  <img src="@/assets/images/logo-bis.png" width="167" />
                </div>

                <div class="field">
                  <label class="label">ایمیل</label>
                  <div class="control has-icons-left">
                    <input
                      type="email"
                      class="input"
                      placeholder="yourmail@gmail.com"
                      required
                      :class="{'is-danger' : error.email}" v-model="form.email"
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </div>
                  <p class="help is-danger" v-if="error.email">نام کاربری یافت نشد</p>
                </div>

                <div class="field">
                  <label class="label">گذرواژه</label>
                  <div class="control has-icons-left">
                    <input
                      type="password"
                      class="input"
                      placeholder="********"
                      required
                      :class="{'is-danger': error.password}" v-model="form.password"
                    />
                    <span class="icon is-small is-left">
                      <i class="fa fa-lock"></i>
                    </span>
                  </div>
                  <p class="help is-danger" v-if="error.password">رمز عبور صحیح نمی باشد</p>
                </div>

                <div class="field">
                  <label class="checkbox">
                    <input type="checkbox" />
                    مرا به خاطر بسپار
                  </label>
                </div>

                <div class="field">
                  <button class="button is-success" @click.prevent="tryLogin">ورود کاربر</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "", 
        password: ""
      },
      error: {
        email: false,
        password: false
      }
    }
  },
  methods: {
    tryLogin(){
      this.resetErrors();

      if (this.form.email !== 'azim.cycletourist@gmail.com'){ return this.error.email = true;}
      if (this.form.password !== 'password'){ return this.error.password = true;}
        

      this.resetErrors();

      this.$router.push('dashboard/azim.cycletourist');
    },
    resetErrors(){
      this.error.email = false;
      this.error.password = false;
    }
  }
};
</script>

<style>
</style>