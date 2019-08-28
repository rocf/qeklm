<template>
  <div class="categories">
    <q-list class="q-pt-md" v-for="category in categories" :key="category.name">
      <div class="row">
        <div class="content col-xs-12 col-md-7 col-sm-9">
          <q-item>
            <q-item-section avatar>
              <q-avatar round :color="category.iconColor" :text-color="category.iconTextColor">
                <q-icon :name="category.iconName" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>
                <router-link :to="category.name">{{ category.name }}</router-link>
              </q-item-label>
              <q-item-label caption>{{ category.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>

        <div class="col-md-1 hidden-sm hidden-xs stats">
          <q-item>
            <q-item-section>
              <q-item-label>{{ category.topics }}</q-item-label>
              <q-item-label caption>主题</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="col-md-1 hidden-sm hidden-xs stats">
          <q-item>
            <q-item-section>
              <q-item-label>{{ category.posts }}</q-item-label>
              <q-item-label caption>帖子</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="col-md-3 col-sm-3 teaser hidden-xs">
          <div class="card" style="">
            <q-item>
              <q-item-section avatar>
                <q-avatar>
                  <img :src="category.userAvatar" />
                  <q-tooltip anchor="top middle" self="center middle">{{ category.userName }}</q-tooltip>
                </q-avatar>
              </q-item-section>

              <q-item-section>
                <q-item-label>
                  <router-link :to="category.lastTopic">{{ category.lastPostTime}}</router-link>
                </q-item-label>
                <q-item-label caption>{{ category.lastPostContent}}</q-item-label>
              </q-item-section>
            </q-item>
          </div>
        </div>
      </div>
    </q-list>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
    
    }
  }
};
</script>

<style lang="stylus" scoped>
.stats {
  font-size: 20px;
  text-align: center;
}

.card {
  border-left: 4px solid;
  // text-align: left;
  margin-left: 25px;
  margin-top: 2px;
  // overflow: hidden;
  // height: 53px;
  // font-size: 12px;
}
</style>