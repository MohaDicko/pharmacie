const mongoose = require("mongoose");

const FormationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    dateFormation: {
      type: Date,
      // required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    // image: {
    // type: String,
    // required: true,
    // },
    // isFeatured: {
    // type: Boolean,
    // default: false,
    // },
    // isPublished: {
    // type: Boolean,
    // default: false,
    // },
  },
  {
    timestamps: true,
  }
);

const Formation = mongoose.model("Formation", FormationSchema);

module.exports = Formation;
