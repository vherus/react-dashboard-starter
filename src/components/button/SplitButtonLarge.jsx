import colourMap from "../../utils/colourMap"

const SplitButtonLarge = ({ onClick, text, icon, colour = 'blue' }) => {
    return (
        <div className={`btn btn-${colourMap[colour]} btn-icon-split btn-lg`} onClick={onClick}>
            <span class="icon text-white-50">
                {icon}
            </span>
            <span class="text">{text}</span>
        </div>
    )
}

export default SplitButtonLarge