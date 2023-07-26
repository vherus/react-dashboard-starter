import colourMap from "../../utils/colourMap"

const ProgressBarSmall = ({ percent, colour = 'blue' }) => {
    return (
        <div className="progress progress-sm mr-2">
            <div className={`progress-bar bg-${colourMap[colour]}`} role="progressbar"
                style={{ width: `${percent}%`}} aria-valuenow={`${percent}`} aria-valuemin="0"
                aria-valuemax="100"></div>
        </div>
    )
}

export default ProgressBarSmall