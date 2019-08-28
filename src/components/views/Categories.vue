<template>
  <q-page padding class="container">
    <div class="col-lg-12">
      <div class="categories-title">{{categoryTitle}}</div>
      <Category :categories="categories"></Category>

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
      categories: [
        {
          cid: 1,
          name: "Announcements",
          description: "Announcements regarding our community",
          iconColor: "orange",
          iconTextColor: "white",
          iconName: "fa fa-bullhorn",
          topics: 1234,
          posts: 5678,
          userName: "test1",
          userAvatar: "statics/logo.png",
          lastTopic: 'lastTopic',
          lastPostTime: '3 min ago',
          lastPostContent: 'aaabbbcccdddeeefffggghhhiiijjj'          
        },

         {
          cid: 2,
          name: "Tools",
          description: "Announcements regarding our community",
          iconColor: "primary",
          iconTextColor: "black",
          iconName: "fa fa-wrench",
          topics: 123,
          posts: 456,
          userName: "test2",
          userAvatar: "statics/logo.png",
          lastTopic: 'lastTopic',
          lastPostTime: '15 min ago',
          lastPostContent: 'xxxxzzzz11112222bbbbhhhhhhadfafdaghahahah'          
        },

         {
          cid: 3,
          name: "Show & Tell",
          description: "Announcements regarding our community",
          iconColor: "orange",
          iconTextColor: "white",
          iconName: "fa fa-bullhorn",
          topics: 1234,
          posts: 5678,
          userName: "test1",
          userAvatar: "statics/logo.png",
          lastTopic: 'lastTopic',
          lastPostTime: '3 min ago',
          lastPostContent: 'aaabbbcccdddeeefffggghhhiiijjj'          
        },

        {
          cid: 4,
          name: "Usefull Tips",
          description: "Announcements regarding our community",
          iconColor: "orange",
          iconTextColor: "white",
          iconName: "fa fa-bullhorn",
          topics: 1234,
          posts: 5678,
          userName: "test1",
          userAvatar: "statics/logo.png",
          lastTopic: 'lastTopic',
          lastPostTime: '3 min ago',
          lastPostContent: 'aaabbbcccdddeeefffggghhhiiijjj'          
        },
      ]
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

