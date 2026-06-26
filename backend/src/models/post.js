import mongoose from "mongoose";

// 1- create a schema
// 2- create a model base on schema

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // create createdAt and updatedAt
  },
);

const Post = mongoose.model("Post", postSchema);
export default Post;
