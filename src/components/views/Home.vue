<template>
  <q-page class="container">
    <div class="q-pa-md col-lg-12">
      <div class="categories-title">{{categoryTitle}}</div>
      <Category></Category>

    </div>
  </q-page>
</template>

<script>
import Category from "./components/Category"

export default {
  name: "PageHome",
  components: {
    Category
  },

  data() {
    return {
      categoryTitle: "版块",
    }
  }
};
</script>

<style lang="stylus" scoped>
.categories-title {
    color: rgb(108, 117, 125);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857;
    margin: 0px 0px 10px;
}
</style>>

