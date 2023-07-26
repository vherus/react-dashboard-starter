import colourMap from "../../utils/colourMap"

const CircleButton = ({ onClick, children, colour = 'blue' }) => {
    return (
        <div className={`btn btn-${colourMap[colour]} btn-circle`} onClick={onClick}>
            {children}
        </div>
    )
}

export default CircleButton