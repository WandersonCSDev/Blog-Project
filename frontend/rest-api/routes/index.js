const express = require("express");
const api = require("./api.js");
const app = express.Router();

app.get("/posts/get-all-blog-posts", async function (req, res) {
  try {
    const apiResponse = await api.getAllBlogPosts();
    res.json(apiResponse);
  } catch (error) {
    res.json(error);
  }
});

app.get("/posts/get-blog-posts-by-tag", async function (req, res) {
  try {
    const apiResponse = await api.getBlogPostsByTag(req.query.tag);
    res.json(apiResponse);
  } catch (error) {
    res.json(error);
  }
});

app.get("/posts/get-five-newest-posts", async function (req, res) {
  try {
    const apiResponse = await api.getFiveNewestPosts();
    res.json(apiResponse);
  } catch (error) {
    res.json(error);
  }
});

app.get("/posts/get-blog-post-by-url-title", async function (req, res) {
  try {
    const apiResponse = await api.getBlogPostByUrlTitle(req.query.urlTitle);
    res.json(apiResponse);
  } catch (error) {
    res.json(error);
  }
});

module.exports = app;
