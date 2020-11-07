import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    img : {
      type: String,
          required: true,
      unique: true
    },
    subTitle : {
      type: String
    },
    title : {
      type: String
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('posts', postSchema)
