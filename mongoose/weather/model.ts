import mongoose from "mongoose";
import { WeatherInterface } from "./interface";
import { WeatherSchema } from "./schema";

export const WeatherModel = mongoose.models.Weather || 
  mongoose.model<WeatherInterface>("Weather", WeatherSchema);
