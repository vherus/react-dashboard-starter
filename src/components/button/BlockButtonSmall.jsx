import colourMap from "../../utils/colourMap"

const BlockButtonSmall = ({ onClick, children, colour = 'blue' }) => {
    return (
        <div className={`btn btn-${colourMap[colour]} btn-block btn-sm`} onClick={onClick}>
            {children}
        </div>
    )
}

export default BlockButtonSmall