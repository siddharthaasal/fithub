import pool from "../server.js";

export const getPosts = async (req, res) => {
  try {
    const { rows } = await pool.query("Select * from blog_posts");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error retrieving blog posts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getPost = async (req, res) => {
  const postId = req.params.id;
  try {
    const { rows } = await pool.query(
      "Select * from blog_posts where id = $1",
      [postId]
    );
    if (rows.length === 0) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (error) {
    console.error("Error retrieving blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const addPost = async (req, res) => {
  const {
    title,
    description,
    coverImage,
    authorName,
    dateOfPosting,
    fullContent,
  } = req.body;
  try {
    // Insert new post into the 'blog_posts' table
    const query = `
      INSERT INTO blog_posts (title, description, cover_image, author_name, date_of_posting)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    const values = [title, description, coverImage, authorName, dateOfPosting];
    const result = await pool.query(query, values);

    // If post is added successfully, send a success response
    res.status(201).json({
      success: true,
      message: "Post added successfully",
      post: result.rows[0],
    });
  } catch (error) {
    // If an error occurs, send an error response
    console.error("Error adding post:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
