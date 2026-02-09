import { weatherData, WeatherLocation } from './data'

// Helper function to find location by ZIP
const findLocationByZip = (zip: string): WeatherLocation | undefined => {
  return weatherData.find((loc) => loc.zip === zip)
}

// Helper function to get friend locations
const getFriendLocations = (friendZips: string[]): WeatherLocation[] => {
  return friendZips
    .map((zip) => findLocationByZip(zip))
    .filter((loc): loc is WeatherLocation => loc !== undefined)
}

export const resolvers = {
  Query: {
    weather: (_: any, { zip }: { zip: string }) => {
      return findLocationByZip(zip)
    },
    allWeather: () => {
      return weatherData
    },
  },
  Location: {
    // Resolver for friends field - returns full Location objects
    friends: (parent: WeatherLocation) => {
      return getFriendLocations(parent.friends)
    },
  },
  Mutation: {
    updateWeather: (_: any, { zip, condition }: { zip: string; condition: string }) => {
      const location = findLocationByZip(zip)
      if (location) {
        location.condition = condition
        return location
      }
      return null
    },
  },
}
