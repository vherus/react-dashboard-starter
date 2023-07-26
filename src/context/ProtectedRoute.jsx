import Footer from '../components/layout/footer/Footer'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'
import Sidebar from '../components/layout/sidebar/Sidebar'
import TopBar from '../components/layout/topBar/TopBar'
import useAuth from '../hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth()
    const location = useLocation()

    if (!user && process.env.REACT_APP_ENVIRONMENT !== 'dev') {
        return <Navigate to='/sign-in' replace state={{ from: location }} />
    }

    return (
        <div id="wrapper">
            <Sidebar />

            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <TopBar />

                    <div className="container-fluid">
                        {children}
                    </div>

                </div>
                
                <Footer />
            </div>
            
            <ScrollToTop />
        </div>
    )
}

export default ProtectedRoute