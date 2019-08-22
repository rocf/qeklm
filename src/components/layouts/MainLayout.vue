<template>
  <q-layout view="lHh Lpr lFf">
    <HeaderToolBar></HeaderToolBar>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderToolBar from "./HeaderToolBar/HeaderToolBar";

export default {
  name: "MainLayout",
  components: {
    HeaderToolBar
  },
  data() {
    return {};
  }
};
</script>
