import { useState } from "react"
import Card from "../../components/card/Card"
import ColourCard from "../../components/card/ColourCard"
import Image from "../../components/image/Image"
import Column from "../../components/layout/grid/Column"
import Row from "../../components/layout/grid/Row"
import PageHeader from "../../components/pageHeader/PageHeader"
import ProgressBar from "../../components/progress/ProgressBar"
import DraggableCards from "../../components/card/draggable/DraggableCards"

const Dashboard = () => {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Fixed Expenses', content: 'Rent' },
        { id: 2, name: 'Variable Expenses', content: 'Grocery' },
        { id: 3, name: 'Investments', content: 'Rainy day' }
    ])

    return (
        <>
            <PageHeader text='Dashboard'>
                <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                    <i className="fas fa-download fa-sm text-white-50"></i> Generate Report
                </a>
            </PageHeader>

            <Row>
                <Column span={9} className='mb-4'>
                    <DraggableCards setData={setCategories} data={categories} />
                </Column>
            </Row>

            <Row>
                <Column span={9} className='mb-4'>
                    <Card header='Progress Bars' collapsable={true} id='progress-card'>
                        <ProgressBar title='Example title' colour='red' percent={20}/>
                        <ProgressBar title='Another one' colour='yellow' percent={40}/>
                        <ProgressBar title='And another' colour='blue' percent={60}/>
                        <ProgressBar title='A teal one' colour='teal' percent={80}/>
                        <ProgressBar title='A green one' colour='green' percent={100}/>
                    </Card>

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

                </Column>

                <div className="col-lg-3 mb-4">

                    <Card collapsable={true} header='Illustrations' shadow={true} id='illustration-card'>
                        <div className="text-center">
                                <Image style={{ width: '25rem'}} src="/img/undraw_posting_photo.svg" alt='...' />
                            </div>
                            <p>Add some quality, svg illustrations to your project courtesy of <a
                                    target="_blank" rel="noreferrer" href="https://undraw.co/">unDraw</a>, a
                                constantly updated collection of beautiful svg images that you can use
                                completely free and without attribution!</p>
                            <a target="_blank" rel="noreferrer" href="https://undraw.co/">Browse Illustrations on
                                unDraw &rarr;</a>
                    </Card>

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                        </div>
                        <div className="card-body">
                            <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce
                                CSS bloat and poor page performance. Custom CSS classes are used to create
                                custom components and custom utility classes.</p>
                            <p className="mb-0">Before working with this theme, you should become familiar with the
                                Bootstrap framework, especially the utility classes.</p>
                        </div>
                    </div>

                </div>
            </Row>
        </>
    )
}

export default Dashboard