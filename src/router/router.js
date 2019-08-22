function load(component) {
  return () => import(`../components/${component}.vue`);
}

const layout = load("layouts/MainLayout");

const otherRouter = {
  path: "/",
  name: "otherRouter",
  component: layout,
  children: [
    {
      path: "home",
      name: "home_index",
      component: load("views/Home")
    },
    {
      path: "about",
      name: "about_page",
      component: load("views/About")
    }
  ]
};
export const routes = [otherRouter];
