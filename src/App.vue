<template>
  <div id="app" >
    <HeaderComponent v-on:changeLang="changeLanguage" :languages="languages" />
    <LeftSidebar />
<!--    <ContentComponent />-->
    <div class="row-task">
      <div class="col-md-6"><ListTask></ListTask></div>
      <div class="col-md-6"><CompletedTask></CompletedTask></div>
    </div>
    <GetTask></GetTask>
    <FormComponent></FormComponent>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">\
   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
   <FooterComponent />
  </div>
</template>

<script>

import HeaderComponent from './components/HeaderComponent'
import LeftSidebar from './components/LeftSidebarComponent'
// import ContentComponent from './components/DashboardWrapperComponent'
import FooterComponent from './components/FooterComponent'
import GetTask from './components/GetTask.vue'
import ListTask from './components/ListTask.vue'
import CompletedTask from './components/CompletedTask.vue'
import FormComponent from './components/FormComponent.vue'

import { i18n } from './i18n'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    LeftSidebar,
    // ContentComponent,
    FooterComponent,
    GetTask,
    ListTask,
    CompletedTask,
    FormComponent
  },
  data() {
    return {
      languages : [
        {
          "key" : "vi",
          "name" : "Tiếng Việt",
        },
        {
          "key" : "en",
          "name" : "English"
        }
      ],
    }
  },
  methods: {
    changeLanguage(language) {
      localStorage.setItem('language', language);
      i18n.locale = language
    }
  },
}
</script>

<style>
  @import 'assets/styles/vendor.css';
  body {
    font-family: Helvetica, sans-serif;
  }
  .row-task{
    margin-left: 280px;
  }
  .logo-title {
    font-weight: bold;
  }

  .my-task {
    color: #f4f7f9!important;
    background-color: #656c7a!important;
  }

  .my-completed {
    color: #f4f7f9!important;
    background-color: #656c7a!important;
  }
  .task-length {
    float: right!important;
  }

  .completed-length {
    float: right!important;
  }

  .list-group-item {
    background-color: wheat;
  }

  .complete-list {
    background-color: #26bf0a!important;
  }

  .remove-completed {
    float: right!important;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
