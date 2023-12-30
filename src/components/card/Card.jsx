const Card = ({ header, children, collapsable = false, dropdownItems = [], shadow = false, id }) => {
    return (
        <div className={`card ${shadow && 'shadow'} mb-4`}>

            {collapsable && 
                <a href={`#${id}`} className="d-block card-header py-3" data-toggle="collapse" role="button" aria-expanded="true" aria-controls={`${id}`}>
                    <h6 className="m-0 font-weight-bold text-primary">{header}</h6>
                </a>
            }

            {!collapsable && !dropdownItems.length &&
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">{header}</h6>
                </div>
            }
            
            {!collapsable && dropdownItems.length > 0 &&
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">{header}</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                            {dropdownItems.map((item, index) => <div key={index} className="dropdown-item">{item}</div>)}
                        </div>
                    </div>
                </div>
            }

            {collapsable && 
                <div className="collapse show" id={`${id}`}>
                    <div className="card-body">
                        {children}
                    </div>
                </div>
            }

            {!collapsable &&
                <div className="card-body">
                    {children}
                </div>
            }
        </div>
    )
}

export default Card