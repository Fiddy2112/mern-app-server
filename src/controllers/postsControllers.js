import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    // const post = new PostModel({
    //   title: "Hello World",
    //   content: "Hello World",
    // });

    // post.save();

    const posts = await PostModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new PostModel(newPost);
    await post.save();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await PostModel.findByIdAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true }
    );
    // await post.save();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};