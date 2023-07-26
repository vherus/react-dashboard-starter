import BlockButton from "../../components/button/BlockButton"
import CircleButton from "../../components/button/CircleButton"
import CircleButtonLarge from "../../components/button/CircleButtonLarge"
import CircleButtonSmall from "../../components/button/CircleButtonSmall"
import SplitButton from "../../components/button/SplitButton"
import SplitButtonLarge from "../../components/button/SplitButtonLarge"
import SplitButtonSmall from "../../components/button/SplitButtonSmall"
import ArrowRightIcon from "../../components/icons/ArrowRightIcon"
import CheckIcon from "../../components/icons/CheckIcon"
import FacebookIcon from "../../components/icons/FacebookIcon"
import FlagIcon from "../../components/icons/FlagIcon"
import InfoIcon from "../../components/icons/InfoIcon"
import TrashIcon from "../../components/icons/TrashIcon"
import WarningIcon from "../../components/icons/WarningIcon"

const Buttons = () => {
    return (
        <div class="row">
            <div class="col-lg-6">
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                    </div>
                    <div class="card-body">
                        <p>Use Font Awesome Icons (included with this theme package) along with the circle
                            buttons as shown in the examples below!</p>
                        
                        <div class="mb-2">
                            <code>.btn-circle</code>
                        </div>
                        <CircleButton>
                            <FacebookIcon/>
                        </CircleButton>

                        <CircleButton colour="green">
                            <CheckIcon/>
                        </CircleButton>

                        <CircleButton colour="teal">
                            <InfoIcon/>
                        </CircleButton>

                        <CircleButton colour="yellow">
                            <WarningIcon/>
                        </CircleButton>

                        <CircleButton colour="red">
                            <TrashIcon/>
                        </CircleButton>
                        
                        <div class="mt-4 mb-2">
                            <code>.btn-circle .btn-sm</code>
                        </div>

                        <CircleButtonSmall>
                            <FacebookIcon/>
                        </CircleButtonSmall>

                        <CircleButtonSmall colour="green">
                            <CheckIcon/>
                        </CircleButtonSmall>

                        <CircleButtonSmall colour="teal">
                            <InfoIcon/>
                        </CircleButtonSmall>

                        <CircleButtonSmall colour="yellow">
                            <WarningIcon/>
                        </CircleButtonSmall>
                        
                        <CircleButtonSmall colour="red">
                            <TrashIcon/>
                        </CircleButtonSmall>
                        
                        <div class="mt-4 mb-2">
                            <code>.btn-circle .btn-lg</code>
                        </div>
                        
                        <CircleButtonLarge>
                            <FacebookIcon/>
                        </CircleButtonLarge>

                        <CircleButtonLarge colour="green">
                            <CheckIcon/>
                        </CircleButtonLarge>

                        <CircleButtonLarge colour="teal">
                            <InfoIcon/>
                        </CircleButtonLarge>

                        <CircleButtonLarge colour="yellow">
                            <WarningIcon/>
                        </CircleButtonLarge>
                        
                        <CircleButtonLarge colour="red">
                            <TrashIcon/>
                        </CircleButtonLarge>
                    </div>
                </div>

                
                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                    </div>
                    <div class="card-body">
                        <p>Google and Facebook buttons are available featuring each company's respective
                            brand color. They are used on the user login and registration pages.</p>
                        <p>You can create more custom buttons by adding a new color variable in the
                            <code>_variables.scss</code> file and then using the Bootstrap button variant
                            mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                            file.</p>
                        <BlockButton colour="google">
                            <i className="fab fa-google fa-fw"></i> .btn-google
                        </BlockButton>

                        <BlockButton colour="facebook">
                            <i className="fab fa-facebook-f fa-fw"></i> .btn-facebook
                        </BlockButton>
                    </div>
                </div>

            </div>

            <div class="col-lg-6">

                <div class="card shadow mb-4">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                    </div>
                    <div class="card-body">
                        <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                            the markup in the examples below. The examples below also use the
                            <code>.text-white-50</code> helper class on the icons for additional styling,
                            but it is not required.</p>
                        <SplitButton
                            text='Blue Colour'
                            icon={<FlagIcon/>}
                            onClick={() => console.log('Button clicked!')}
                        />

                        <div class="my-2"></div>

                        <SplitButton
                            colour="green"
                            text='Green Colour'
                            icon={<CheckIcon/>}
                        />

                        <div class="my-2"></div>

                        <SplitButton
                            colour="teal"
                            text='Teal Colour'
                            icon={<InfoIcon/>}
                        />

                        <div class="my-2"></div>

                        <SplitButton
                            colour="yellow"
                            text='Yellow Colour'
                            icon={<WarningIcon/>}
                        />

                        <div class="my-2"></div>

                        <SplitButton
                            colour="red"
                            text='Red Colour'
                            icon={<TrashIcon/>}
                        />

                        <div class="my-2"></div>

                        <SplitButton
                            colour="grey"
                            text='Grey Colour'
                            icon={<ArrowRightIcon/>}
                        />

                        <div class="my-2"></div>

                        <SplitButton
                            colour="light"
                            text='Light Colour'
                            icon={<ArrowRightIcon/>}
                        />

                        <div class="mb-4"></div>
                        <p>Also works with small and large button classes!</p>

                        <SplitButtonLarge
                            text='Large button'
                            icon={<FlagIcon/>}
                        />
                        
                        <div class="my-2"></div>
                        
                        <SplitButtonSmall
                            text='Small button'
                            icon={<FlagIcon/>}
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Buttons