import colourMap from "../../utils/colourMap"

const BlockButtonLarge = ({ onClick, children, colour = 'blue' }) => {
    return (
        <div className={`btn btn-${colourMap[colour]} btn-block btn-lg`} onClick={onClick}>
            {children}
        </div>
    )
}

export default BlockButtonLarge