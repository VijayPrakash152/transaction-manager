const Item = require("./models/item");
const Order = require("./models/order");
const mongoose = require("mongoose");
const config = require("config");

const items = [
  {
    title: "Sample Item",
  },
  {
    title: "Sample Item2",
  },
  {
    title: "Sample Item3",
  },
  {
    title: "Sample Item4",
  },
  {
    title: "Sample Item5",
  },
  {
    title: "Sample Item6",
  },
  {
    title: "Sample Item7",
  },
];

const orders = [
  {
    coupon: "OFF50",
    amount: 4000,
    paid: true,
    phone: "1234567890",
    email: "john.doe@email.com",
    utm_params: {
      source: "google",
      medium: "seo_pages",
      campaign: "sale",
      term: null,
    },
    order_id: "-Scn3Xbss",
    payment_id: "276159121",
  },
  {
    coupon: "OFF60",
    amount: 3000,
    paid: true,
    phone: "9876543210",
    email: "jahn.doe@email.com",
    utm_params: {
      source: "google",
      medium: "seo_pages",
      campaign: "sale",
      term: null,
    },
    order_id: "-Scn3Xbst",
    payment_id: "276159111",
  },
];
async function seed() {
  await mongoose.connect(config.get("db"));

  await Item.deleteMany({});
  await Order.deleteMany({});

  for (let item of items) {
    const { _id: itemId } = await new Item({ title: item.title }).save();
    const ordered_items = orders.map((order) => ({
      ...order,
      item: itemId,
    }));
    await Order.insertMany(ordered_items);
  }

  mongoose.disconnect();

  console.info("Done!");
}

seed();
