import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/smoothieverse";

const connectDb = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDb;
