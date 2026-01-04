import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Placeholder pages - to be implemented
const Dashboard = () => (
  <div className="min-h-screen bg-gray-900 text-white p-8">
    <h1 className="text-3xl font-bold text-cyan-400">NoverThinker Admin</h1>
    <p className="text-gray-400 mt-2">Dashboard - Coming Soon</p>
  </div>
)

const Login = () => (
  <div className="min-h-screen bg-gray-900 flex items-center justify-center">
    <div className="bg-gray-800 p-8 rounded-lg">
      <h1 className="text-2xl font-bold text-white mb-4">Admin Login</h1>
      <p className="text-gray-400">Login page - Coming Soon</p>
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App