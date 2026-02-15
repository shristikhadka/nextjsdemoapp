import { findByZip, updateByZip, findAll } from '../mongoose/weather/services'
import { WeatherInterface } from '../mongoose/weather/interface'

// Helper function to convert MongoDB document to GraphQL Location format
const mapToLocation = (doc: WeatherInterface | null): any => {
  if (!doc) return null
  
  return {
    zip: doc.zip,
    city: '', // MongoDB doesn't have city, using empty string
    state: '', // MongoDB doesn't have state, using empty string
    tempC: parseFloat(doc.tempC.replace('C', '')), // Convert "25C" to 25
    tempF: parseFloat(doc.tempF.replace('F', '')), // Convert "70F" to 70
    condition: doc.weather, // Map "weather" to "condition"
    friends: doc.friends,
    notes: null // MongoDB doesn't have notes field
  }
}

// Helper function to get friend locations
const getFriendLocations = async (friendZips: string[]): Promise<any[]> => {
  const friendPromises = friendZips.map(zip => findByZip(zip))
  const friends = await Promise.all(friendPromises)
  return friends
    .filter((doc): doc is WeatherInterface => doc !== null)
    .map(mapToLocation)
}

export const resolvers = {
  Query: {
    weather: async (_: any, { zip }: { zip: string }) => {
      const doc = await findByZip(zip)
      return mapToLocation(doc)
    },
    allWeather: async () => {
      const docs = await findAll()
      return docs.map(mapToLocation)
    },
  },
  Location: {
    // Resolver for friends field - returns full Location objects
    friends: async (parent: any) => {
      return await getFriendLocations(parent.friends)
    },
  },
  Mutation: {
    updateWeather: async (_: any, { zip, condition }: { zip: string; condition: string }) => {
      const existing = await findByZip(zip)
      if (!existing) return null
      
      const updated = {
        ...existing,
        weather: condition // Update the weather field
      }
      
      await updateByZip(zip, updated)
      const result = await findByZip(zip)
      return mapToLocation(result)
    },
  },
}
