<template>
  <q-page>
    <q-header bordered class="bg-white text-grey-8">
      <q-toolbar class="container">
        <q-btn-group flat unelevated stretch>
          <q-btn type="label" flat no-caps>Quasar App</q-btn>
          <q-btn flat icon="fas fa-list" color="grey-7" size="sm">
            <q-tooltip>{$t("Categories") }</q-tooltip>
          </q-btn>
          <q-btn flat icon="far fa-clock" color="grey-7" size="sm"></q-btn>
          <q-btn flat icon="fas fa-tags" color="grey-7" size="sm"></q-btn>
          <q-btn flat icon="fas fa-fire" color="grey-7" size="sm"></q-btn>
          <q-btn flat icon="fas fa-user" color="grey-7" size="sm"></q-btn>
          <q-btn flat icon="fas fa-users" color="grey-7" size="sm"></q-btn>
          <q-btn flat icon="fas fa-search" color="grey-7" size="sm"></q-btn>
        </q-btn-group>
        <q-toolbar-title></q-toolbar-title>
      </q-toolbar>
    </q-header>
  </q-page>
</template>
