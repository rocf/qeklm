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
      path: "categories",
      name: "categories_page",
      component: load("views/Categories")
    }
  ]
};

const page403 = {
  path: "*",
  name: "page403",
  component: load("views/403")
};

export const routes = [otherRouter, page403];
