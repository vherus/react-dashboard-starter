import colourMap from "../../utils/colourMap"

const CircleButtonSmall = ({ onClick, children, colour = 'blue' }) => {
    return (
        <div className={`btn btn-${colourMap[colour]} btn-circle btn-sm`} onClick={onClick}>
            {children}
        </div>
    )
}

export default CircleButtonSmall