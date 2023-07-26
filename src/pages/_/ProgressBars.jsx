import Card from "../../components/card/Card"
import Column from "../../components/layout/grid/Column"
import Row from "../../components/layout/grid/Row"
import ProgressBar from "../../components/progress/ProgressBar"

const ProgressBars = () => {
    return (
        <Row>
            <Column span={12}>
                <Card header='Progress Bars'>
                    <ProgressBar title='Example title' colour='red' percent={20}/>
                    <ProgressBar title='Another one' colour='yellow' percent={40}/>
                    <ProgressBar title='And another' colour='blue' percent={60}/>
                    <ProgressBar title='A teal one' colour='teal' percent={80}/>
                    <ProgressBar title='A green one' colour='green' percent={100}/>
                </Card>
            </Column>
        </Row>
    )
}

export default ProgressBars