import mongoose from 'mongoose'

const postSchema = new mongoose.Schema(
  {
    img: {
      type: String
    },
    cotegory: {
      type: String,
      default: 'photodiary'
    },
    title: {
      type: String,
      required: true,
      unique: true
    },
    description: {
      type: String
    },
    miniDescription: {
      type: String
    }
  },
  {
    timestamps: true
  }
)

export default mongoose.model('posts', postSchema)
