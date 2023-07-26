import colourMap from "../../utils/colourMap"

const ProgressBar = ({ title, percent, colour = 'blue' }) => {
    return (
        <>
            <h4 className="small font-weight-bold">{title} <span className="float-right">{percent}%</span></h4>
            <div className="progress mb-4">
                <div className={`progress-bar bg-${colourMap[colour]}`} role="progressbar" style={{width: `${percent}%`}} aria-valuenow={`${percent}`} aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </>
    )
}

export default ProgressBar