import Table from "../../components/table/Table"
import TableHeader from "../../components/table/TableHeader"
import TableRow from "../../components/table/TableRow"

const Tables = () => {
    return (
        <>
            <div class="card shadow mb-4 col-12">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Tables Example</h6>
                </div>
                <div class="card-body">

                    <Table id='test-table'>
                        <TableHeader columns={['One', 'Two', 'Three']}/>
                        <TableRow columns={['Test', 'Test Two', 'Test three']}/>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Tables