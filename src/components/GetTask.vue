<template>
  <div id="get-tasks">
    <form @submit.prevent="addTask">
      <ValidationObserver ref="form">
        <ValidationProvider rules="minmax:5,24" v-slot="{ errors }">
          <input v-model="minmax" @change="getTask" type="text" value="newTask" placeholder="Type name ..." class="form-control-input">
          <span class="span-err">{{ errors[0] }}</span>
        </ValidationProvider>
      </ValidationObserver>
      <br>
      <button type="submit" class="btn btn-primary"><i class="fa fa-plus"></i> New Task</button>
    </form>
  </div>
</template>

<script>
// import Vuex from 'vuex'
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default{
  name: "GetTask",
  components: {
    ValidationProvider,
    ValidationObserver
  },
  data: () => ({
    minmax: "",
    min:""
  }),
  methods: {
    getTask(e) {
      this.$store.dispatch('getTask', e.target.value)
    },
    addTask(e) {
      e.preventDefault();
      this.$store.dispatch('addTask')
      this.$store.dispatch('clearTask')
    }
  },
  computed: {
    newTask() {
      return this.$store.getters.newTask
    }
  }
}
</script>

<style>
    .btn-primary {
      margin-left: 300px;
    }
    .form-control-input{
      margin-left: 300px;
      width: 300px;
    }
    .span-err {
      display: block;
      margin-left: 300px;
    }
</style>