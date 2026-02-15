import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { storeDocument } from "../mongoose/weather/services";

let mongoServer: MongoMemoryServer | null = null;

async function dbConnect(): Promise<any | string> {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  if (!mongoServer) {
    mongoServer = await MongoMemoryServer.create();
    const MONGO_URI = mongoServer.getUri();
    await mongoose.disconnect();

    let db = await mongoose.connect(MONGO_URI, {
      dbName: "Weather"
    });

    // Seed initial data
    if (mongoose.connection.db) {
      const existingData = await mongoose.connection.db.collection("weathers").countDocuments();
      if (existingData === 0) {
        await storeDocument({
          zip: "96815",
          weather: "sunny",
          tempC: "25C",
          tempF: "70F",
          friends: ["96814", "96826"]
        });
        await storeDocument({
          zip: "96814",
          weather: "rainy",
          tempC: "20C",
          tempF: "68F",
          friends: ["96815", "96826"]
        });
        await storeDocument({
          zip: "96826",
          weather: "rainy",
          tempC: "30C",
          tempF: "86F",
          friends: ["96815", "96814"]
        });
      }
    }
  }

  return mongoose.connection;
}

export default dbConnect;
