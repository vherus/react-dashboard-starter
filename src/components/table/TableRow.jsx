const TableRow = ({ columns = [] }) => {
    return (
        <tr>
            {columns.map((col, index) => <td key={index}>{col}</td>)}
        </tr>
    )
}

export default TableRow