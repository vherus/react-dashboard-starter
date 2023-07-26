import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const onLogin = async (email, password) => {
        setUser({
            id: 1,
            email,
            name: 'Nathan King'
        })

        navigate('/')
    }

    const onLogout = () => {
        setUser(null)
    }

    const value = {
        user,
        onLogin,
        onLogout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }