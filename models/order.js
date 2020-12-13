const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    item: {
      type: String,
      required: true,
    },
    coupon: {
      type: String,
    },
    amount: {
      type: Number,
    },
    paid: {
      type: Boolean,
    },
    phone: {
      type: String,
      length: 10,
    },
    email: {
      type: String,
    },
    utm_params: {
      source: {
        type: String,
      },
      medium: {
        type: String,
      },
      campaign: {
        type: String,
      },
      term: {
        type: Object,
      },
    },
    order_id: {
      type: String,
    },
    payment_id: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
