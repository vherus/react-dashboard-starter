import Card from "../../components/card/Card"
import ToastCard from "../../components/card/ToastCard"
import ProgressBarSmall from "../../components/progress/ProgressBarSmall"

const Cards = () => {
    return (
        <>
        <div className="row">
                <ToastCard header='Sample Header' colour="blue" icon={<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>}>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">Sample text</div>
                </ToastCard>

                <ToastCard header='Sample Header' colour="green" icon={<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>}>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">Sample text</div>
                </ToastCard>

                <ToastCard header='Sample Header' colour="teal">
                    <div className="row no-gutters align-items-center">
                        <div className="col-auto">
                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                        </div>
                        <div className="col">
                            <ProgressBarSmall percent={50}/>
                        </div>
                    </div>
                </ToastCard>

                <ToastCard header='Sample Header' colour="yellow" icon={<i className="fas fa-comments fa-2x text-gray-300"></i>}>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                </ToastCard>

            </div>
            <div className="row">
                <div className="col-lg-6"> 
                    <Card
                        header='Dropdown Card Component'
                        collapsable={false}
                        dropdownItems={[
                            'One',
                            'Two'
                        ]}
                    >
                        This card uses Bootstrap's default styling with no utility classes added. Global
                        styles are the only things modifying the look and feel of this default card example.
                    </Card>

                    <Card
                        header='Default Card Component'
                    >
                        This card uses Bootstrap's default styling with no utility classes added. Global
                        styles are the only things modifying the look and feel of this default card example.
                    </Card>

                </div>

                <div className="col-lg-6">
                    <Card
                        header='Collapsable Card Component'
                        collapsable={true}
                        id='collapsable-crd'
                    >
                        This is a collapsable card example using Bootstrap's built in collapse functionality. Click on the card header to see the card body collapse and expand! <strong>You must supply an ID for this component.</strong>
                    </Card>

                    <Card
                        header='Default Card Component'
                    >
                        This card uses Bootstrap's default styling with no utility classes added. Global
                        styles are the only things modifying the look and feel of this default card example.
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Cards