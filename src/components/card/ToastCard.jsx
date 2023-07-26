import colourMap from '../../utils/colourMap'

const ToastCard = ({ header, children, icon, colour = 'blue' }) => {
    return (
        <div className="col-xl-3 col-md-6 mb-4">
            <div className={`card border-left-${colourMap[colour]} shadow h-100 py-2`}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${colourMap[colour]} text-uppercase mb-1`}>
                                {header}
                            </div>

                            {children}
                        </div>
                        
                        {icon && 
                            <div className="col-auto">
                                {icon}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ToastCard