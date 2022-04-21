const path = require("path");
exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/sign|reset/)) {
    page.context.layout = "mini";
    createPage(page);
  } else if (page.path.match(/coming/)) {
    page.context.layout = "coming";
    createPage(page);
  }

  console.log("Page - " + page.path);
  if (page.path.match(/^\/blogs/)) {
    createPage({
      path: "/blogsPage",
      matchPath: "/blogsPage/:id",
      component: path.resolve(`src/pages/blogs/blogs.js`),
    });
  }
  if (page.path.match(/^\/currentBlog/)) {
    createPage({
      path: "/currentBlog",
      matchPath: "/currentBlog/:id",
      component: path.resolve(`src/pages/currentBlog.js`),
    });
  }
  // if (page.path.match === "/^\/blogs") {
  //   createPage({
  //     path: "/blogs",
  //     component: path.resolve(`src/pages/blogs/index.js`),
  //   });
  // }
};
