const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    desc: {
      type: String,
      required: true,
      min: 3,
    },
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    long: {
      ///=longitude
      type: Number,
      required: true,
    },
    lat: {
      ///=lattitude
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
  ///ある値が作られた時間を記録するもの。サーバー側からもクライアント側からも使用することができる。
);

module.exports = mongoose.model("Pin", PinSchema);
