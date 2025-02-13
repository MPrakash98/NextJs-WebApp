import mongoose, { ConnectOptions } from "mongoose";
declare global {
  var mongoose: any;
}

const MONGODB_URI = process.env.NEXT_PUBLIC_MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is missing in .env.local");
}

let cached = global.mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;
  
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "nextjswebapp",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions).then((m) => {
      console.log("Db connected successfully");
      
      return m.connection
    });
  }
  
  cached.conn = await cached.promise;
  return cached.conn;
}
