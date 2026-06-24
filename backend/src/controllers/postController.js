export const getAllPosts = (req, res) => {
  res.send("Hello World! from getPosts");
}

export const getPosts = (req, res) => {
  const id = req.params.id
  res.send("Hello World! from getPosts");
}

export const createPost = (req, res) => {
  res.send("Hello World! from createPost");
}

export const updatePost = (req, res) => {
  const id = req.params.id
  res.send("Hello World! from updatePost");
}

export const deletePost = (req, res) => {
  const id = req.params.id
  res.send("Hello World! from deletePost");
}