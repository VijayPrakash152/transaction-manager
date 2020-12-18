const Order = require("../models/order");
const Item = require("../models/item");

const generate = () => {
  return new Promise(async (resolve, reject) => {
    const orders = await Order.find({
      createdAt: {
        $lt: new Date(),
        $gte: new Date(new Date().setDate(new Date().getDate() - 1)),
      },
    }).select("-_id -__v");
    let successfulTransactions = 0;
    let volumeOfTransactions = 0;
    orders.forEach((order) => {
      if (order.paid === true) {
        successfulTransactions++;
        volumeOfTransactions += order.amount;
      }
    });

    const headers = [
      "si_no",
      "order_id",
      "payment_id",
      "createdAt",
      "updatedAt",
      "item_id",
      "item_name",
      "coupon",
      "amount",
      "paid_status",
      "phone",
      "email",
      "utm_params_source",
      "utm_params_medium",
      "utm_params_campaign",
      "utm_params_term",
    ];

    const data = await Promise.all(
      orders.map(async (order, index) => {
        const {
          item: item_id,
          utm_params,
          paid: paid_status,
          ...restOrder
        } = order.toObject();
        const { title: item_name } = await Item.findById(item_id);
        const {
          source: utm_params_source,
          medium: utm_params_medium,
          campaign: utm_params_campaign,
          term: utm_params_term,
        } = utm_params;
        return {
          ...restOrder,
          item_id,
          item_name,
          utm_params_campaign,
          utm_params_medium,
          utm_params_source,
          utm_params_term,
          paid_status,
          si_no: index + 1,
        };
      })
    );
    resolve({
      data,
      transactions: orders.length,
      successfulTransactions,
      volumeOfTransactions,
      headers,
    });
  });
};
module.exports.generate = generate;
