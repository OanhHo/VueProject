<template>
  <div class="form-vadidate">
    <ValidationObserver ref="form">
    <hr>
      <h2 class="head-h2">Integrating i18n with VeeValidate: vue-i18n</h2>
      <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
        <input type="text" v-model="email" placeholder="type some email" class="input">
        <span class="span-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider name="phone" rules="required|max:10" v-slot="{ errors }">
        <input type="phone" v-model="phone" placeholder="type phone number" class="input">
        <span class="span-error">{{ errors[0] }}</span>
      </ValidationProvider>

      <ValidationProvider name="password" rules="required|min:8,12" v-slot="{ errors }">
        <input type="password" v-model="password" placeholder="type password" class="input">
        <span class="span-error">{{ errors[0] }}</span>
      </ValidationProvider>
    </ValidationObserver>

    <button @click="switchLoc" class="btn btn-i18n">Switch Locale</button>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "FormComponent",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    email: "",
    password: "",
    phone: ""
  }),
  methods: {
    async submit() {
      console.log("email submitted!");
    },
    switchLoc() {
      // switch the locale.
      this.locale = this.locale === "en" ? "vi" : "en";
      // you could also import 'localize' and call it.
      // localize('vi');

      // re-validate to re-generate the messages.
      this.$refs.form.validate();
    }
  }
};
</script>


<style>
.form-vadidate{
  margin-left: 300px;
}
.span-error {
  display: block;
}

.input {
  margin-top: 20px;
  width: 300px;
}
</style>