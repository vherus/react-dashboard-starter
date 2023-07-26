import colourMap from "../../utils/colourMap"

const ColourCard = ({ header, children, colour = 'blue', textColour = 'white' }) => {
    return (
        <div className={`card bg-${colourMap[colour]} text-${textColour} shadow`}>
            <div className="card-body">
                {header}
                <div className={`text-${textColour}-50 small`}>{children}</div>
            </div>
        </div>
    )
}

export default ColourCard