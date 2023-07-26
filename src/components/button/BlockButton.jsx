import colourMap from "../../utils/colourMap"

const BlockButton = ({ onClick, children, colour = 'blue' }) => {
    return (
        <div className={`btn btn-${colourMap[colour]} btn-block`} onClick={onClick}>
            {children}
        </div>
    )
}

export default BlockButton