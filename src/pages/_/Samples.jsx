import ColourCard from "../../components/card/ColourCard"
import Image from "../../components/image/Image"
import Column from "../../components/layout/grid/Column"
import Row from "../../components/layout/grid/Row"
import Buttons from "./Buttons"
import Cards from "./Cards"
import ProgressBars from "./ProgressBars"
import Tables from "./Tables"

const Samples = () => {
    return (
        <>
            <Buttons />

            <Row>
                <Tables/>
            </Row>

            <Cards/>

            <ProgressBars/>

            <Row>
                <Column span={6} className='mb-4'>
                    <ColourCard header='Primary'>
                        #4e73df
                    </ColourCard>
                </Column>

                <Column span={6} className='mb-4'>
                    <ColourCard header='Success' colour="green">
                        #1cc88a
                    </ColourCard>
                </Column>

                <Column span={6} className='mb-4'>
                    <ColourCard header='Info' colour="teal">
                        #36b9cc
                    </ColourCard>
                </Column>

                <Column span={6} className='mb-4'>
                    <ColourCard header='Warning' colour="yellow">
                        #f6c23e
                    </ColourCard>
                </Column>

                <Column span={6} className='mb-4'>
                    <ColourCard header='Danger' colour="red">
                        #e74a3b
                    </ColourCard>
                </Column>

                <Column span={6} className='mb-4'>
                    <ColourCard header='Secondary' colour="grey">
                        #858796
                    </ColourCard>
                </Column>

                <Column span={6} className='mb-4'>
                    <ColourCard header='Light' colour="light" textColour="dark">
                        #f8f9fc
                    </ColourCard>
                </Column>

                <Column span={6} className='mb-4'>
                    <ColourCard header='Dark' colour="dark">
                        #5a5c69
                    </ColourCard>
                </Column>
            </Row>

            <Row>
                <Column span={8} className='mb-4'>
                    <div className="text-center">
                        <Image style={{ width: '30rem'}} src="/img/undraw_posting_photo.svg" alt='...' />
                    </div>
                </Column>

                <Column span={4} className='mb-4'>
                    <Image style={{ width: '25rem'}} src="/img/undraw_posting_photo.svg" alt='...' />
                </Column>
            </Row>
        </>
    )
}

export default Samples