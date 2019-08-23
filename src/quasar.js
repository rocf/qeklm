import Vue from "vue";

import "./styles/quasar.styl";
import iconSet from "quasar/icon-set/fontawesome-v5.js";
import lang from "quasar/lang/zh-hans.js";
import "@quasar/extras/roboto-font/roboto-font.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/fontawesome-v5/fontawesome-v5.css";
import "@quasar/extras/ionicons-v4/ionicons-v4.css";
import "@quasar/extras/mdi-v3/mdi-v3.css";
import "@quasar/extras/eva-icons/eva-icons.css";
import {
  Quasar,
  QLayout,
  QHeader,
  QDrawer,
  QPageContainer,
  QPage,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QBtnGroup,
  QIcon,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QTooltip,
  QBtnToggle,
  QAvatar
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QBtnGroup,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QTooltip,
    QBtnToggle,
    QAvatar
  },
  directives: {},
  plugins: {},
  lang: lang,
  iconSet: iconSet
});
