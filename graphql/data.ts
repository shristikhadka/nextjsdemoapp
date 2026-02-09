// Static weather data source
export interface WeatherLocation {
  zip: string
  city: string
  state: string
  tempC: number
  tempF: number
  condition: string
  friends: string[] // Array of friend ZIP codes
  notes?: string | null // Nullable field
}

export const weatherData: WeatherLocation[] = [
  {
    zip: '10001',
    city: 'New York',
    state: 'NY',
    tempC: 22,
    tempF: 72,
    condition: 'Sunny',
    friends: ['10002', '90210'],
    notes: 'Beautiful day in the city'
  },
  {
    zip: '10002',
    city: 'New York',
    state: 'NY',
    tempC: 20,
    tempF: 68,
    condition: 'Partly Cloudy',
    friends: ['10001', '90210'],
    notes: null // Demonstrating nullable field
  },
  {
    zip: '90210',
    city: 'Beverly Hills',
    state: 'CA',
    tempC: 25,
    tempF: 77,
    condition: 'Sunny',
    friends: ['10001', '10002'],
    notes: 'Perfect weather for outdoor activities'
  },
  {
    zip: '60601',
    city: 'Chicago',
    state: 'IL',
    tempC: 15,
    tempF: 59,
    condition: 'Cloudy',
    friends: ['10001'],
    notes: null // Another null example
  },
  {
    zip: '33101',
    city: 'Miami',
    state: 'FL',
    tempC: 28,
    tempF: 82,
    condition: 'Hot',
    friends: ['90210'],
    notes: 'Very warm today'
  }
]
