<template>
  <q-list>
    <q-item>
      <q-item-section avatar class="col-1">
        <q-avatar suqare color="orange" text-color="white" icon="fa fa-bullhorn"></q-avatar>
      </q-item-section>

      <q-item-section class="col-6">
        <q-item-label>
          <div class="title">
            <a href="/topic">Announcements</a>
          </div>
        </q-item-label>
        <q-item-label caption>Announcements regarding our community</q-item-label>
      </q-item-section>
      <q-item-section side class="col-1">
        <q-item-label class="stats">123</q-item-label>
        <q-item-label>
          <small>主题</small>
        </q-item-label>
      </q-item-section>

      <q-item-section side class="col-1">
        <q-item-label class=" stats">456</q-item-label>
        <q-item-label>
          <small>帖子</small>
        </q-item-label>
      </q-item-section>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: "Category"
};
</script>

<style lang="stylus" scoped>
a {
  color: rgb(51, 122, 183);
  text-decoration: none;
  background-color: transparent;
}

.title {
  display: block;
  overflow-wrap: break-word;
  font-size: 18px;
  line-height: 22px;
  overflow: hidden;
}

.stats {
  font-size: 20px;
  text-align: center;
}
</style>