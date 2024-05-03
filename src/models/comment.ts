import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    content: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', CommentSchema);

export default Comment;
