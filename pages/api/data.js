export default function handler(req, res) {
  // API route handler
  if (req.method === 'GET') {
    const data = {
      message: 'This is a Next.js API endpoint',
      timestamp: new Date().toISOString(),
      data: {
        users: [
          { id: 1, name: 'John Doe', email: 'john@example.com' },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
        ],
        stats: {
          totalUsers: 3,
          activeUsers: 2,
          totalPosts: 15,
        },
      },
      info: 'This endpoint returns JSON data and can be accessed at /api/data',
    }

    res.status(200).json(data)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}
