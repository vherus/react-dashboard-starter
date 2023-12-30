import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/Dashboard'
import Login from './pages/auth/login/Login'
import { AuthProvider } from './context/auth'
import ProtectedRoute from './context/ProtectedRoute'
import Samples from './pages/_/Samples'

const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='sign-in' element={<Login/>}/>

                {import.meta.env.MODE === 'development' && <Route path='_/samples' element={<Samples/>}/>}

                <Route
                    index
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </AuthProvider>
    )
}

export default App
