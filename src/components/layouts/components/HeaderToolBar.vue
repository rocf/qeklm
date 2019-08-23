<template>
  <q-header bordered class="bg-white text-grey-8">
    <q-toolbar class="container">
      <q-btn flat type="a" @click="$router.push('home')">
        <q-avatar>
          <img src="../../../assets/logo.png" />
        </q-avatar>Quasar App
      </q-btn>
      <q-btn-toggle
        flat
        stretch
        toggle-color="grep-5"
        size="xs"
        v-model="active"
        @input="input"
        :options="[
        {icon: 'fas fa-list', value:'categories', slot:'categories'},
        {icon: 'far fa-clock', value:'recent', slot:'recent'},
        {icon: 'fas fa-tags', value:'tags', slot:'tags'},
        {icon: 'fas fa-fire', value:'popular', slot:'popular'},
        {icon: 'fas fa-user', value:'users', slot:'users'},
        {icon: 'fas fa-users', value:'groups', slot:'groups'},
        {icon: 'fas fa-search', value:'search', slot:'search'},
        ]"
      >
        <template v-slot:categories>
          <q-tooltip>版块</q-tooltip>
        </template>
        <template v-slot:recent>
          <q-tooltip>最新</q-tooltip>
        </template>
        <template v-slot:tags>
          <q-tooltip>话题</q-tooltip>
        </template>
        <template v-slot:popular>
          <q-tooltip>热门</q-tooltip>
        </template>
        <template v-slot:users>
          <q-tooltip>用户</q-tooltip>
        </template>
        <template v-slot:groups>
          <q-tooltip>群组</q-tooltip>
        </template>
        <template v-slot:search>
          <q-tooltip>搜索</q-tooltip>
        </template>
        </q-btn-toggle>

        <q-toolbar-title></q-toolbar-title>

        <q-btn flat square>
          <q-avatar>
            <img src="../../../assets/logo.png" />
          </q-avatar>
        </q-btn>
      
    </q-toolbar>
  </q-header>
</template>

<script>
import router from "../../../router";

export default {
  data() {
    return {
      active: null
    };
  },

  methods: {
    input(value) {
      router.push(value);
    }
  }
};
</script>
