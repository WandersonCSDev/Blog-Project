const moment = require("moment");
const showdown = require("showdown");

const BlogPostModel = require("../models/post.js");

module.exports = {
  getAllBlogPosts: async function () {
    const now = moment().unix();

    try {
      const posts = await BlogPostModel.find(
        { dateTimestamp: { $lte: now } },
        "title urlTitle dateTimestamp tags thumbnailImageUrl"
      )
        .sort({ dateTimestamp: -1 })
        .exec();

      return { success: true, posts: posts };
    } catch (error) {
      return { getDataError: true };
    }
  },

  getBlogPostsByTag: async function (tag) {
    const now = moment().unix();

    try {
      const posts = await BlogPostModel.find(
        { tags: tag, dateTimestamp: { $lte: now } },
        "title urlTitle dateTimestamp tags thumbnailImageUrl"
      )
        .sort({ dateTimestamp: -1 })
        .exec();

      return { success: true, posts: posts };
    } catch (error) {
      return { getDataError: true };
    }
  },

  getFiveNewestPosts: async function () {
    const now = moment().unix();

    try {
      const posts = await BlogPostModel.find(
        { dateTimestamp: { $lte: now } },
        "title urlTitle dateTimestamp tags thumbnailImageUrl"
      )
        .sort({ dateTimestamp: -1 })
        .limit(5)
        .exec();

      return { success: true, posts: posts };
    } catch (error) {
      return { getDataError: true };
    }
  },

  getBlogPostByUrlTitle: async function (urlTitle) {
    try {
      const post = await BlogPostModel.findOne({ urlTitle: urlTitle }).exec();

      if (!post) {
        return { notFoundError: true };
      }

      const markdownConverter = new showdown.Converter();
      post.markdownContent = markdownConverter.makeHtml(post.markdownContent);

      return { success: true, post: post };
    } catch (error) {
      return { getDataError: true };
    }
  },
};
