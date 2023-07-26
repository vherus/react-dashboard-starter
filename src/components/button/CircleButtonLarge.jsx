import colourMap from "../../utils/colourMap"

const CircleButtonLarge = ({ onClick, children, colour = 'blue' }) => {
    return (
        <div className={`btn btn-${colourMap[colour]} btn-circle btn-lg`} onClick={onClick}>
            {children}
        </div>
    )
}

export default CircleButtonLarge