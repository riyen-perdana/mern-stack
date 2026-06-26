import Post from "../models/post.js";

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error: ${error.message}` || error.message });
  }
};

const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: `Post with id ${id} not found` });
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error: ${error.message}` || error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = new Post({ title, content });
    await newPost.save();
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error: ${error.message}` || error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const id = req.params.id;

    // Cari Data
    const post = await Post.findById(id);

    // Jika Data Post Tidak Ditemukan
    if (!post) {
      return res.status(404).json({ message: `Post with id ${id} not found` });
    }

    // Jika Data Post Ditemukan, Update Data
    post.title = title;
    post.content = content;

    // Update Data
    const data = await post.save();
    res
      .status(200)
      .json({ message: "Post updated successfully", data: data });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error: ${error.message}` || error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await Post.findByIdAndDelete(id);

    if(!post) {
      return res.status(404).json({ message: `Post with id ${id} not found` });
    }

    res
      .status(200)
      .json({ message: "Post deleted successfully" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Error: ${error.message}` || error.message });
  }
};

export { getAllPosts, getPost, createPost, updatePost, deletePost };
