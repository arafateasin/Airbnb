const mongoose = require ("mongoose");
const initData = require("./data.js"); 
const Listing = require("../Models/listing.js");


main()
.then(() => {
  console.log("Connected to DB");
})
.catch((err) => {
  console.log( err);
});

async function main() {
  await mongoose.connect("mongodb://localhost:27017/testwander");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({...obj, owner:"668fdd566e6370528676f1b2"}));
  await Listing.insertMany(initData.data);
  // console.log(listing.owner);
  console.log("data was initalized");

};
initDB();
