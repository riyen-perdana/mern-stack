import Post from "../models/post.js";

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res
      .status(200)
      .json(posts);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error: ${error.message}` || error.message });
  }
};

const getPost = async (req, res) => {
  const id = req.params.id;
  res.send("Hello World! from getPosts");
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res
      .status(201)
      .json({ message: "Post created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error: ${error.message}` || error.message });
  }
};

const updatePost = async (req, res) => {
  const id = req.params.id;
  res.send("Hello World! from updatePost");
};

const deletePost = async (req, res) => {
  const id = req.params.id;
  res.send("Hello World! from deletePost");
};

export { getAllPosts, getPost, createPost, updatePost, deletePost };
