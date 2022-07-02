import React from 'react'

import { Table } from 'react-bootstrap';
import TableItem from '../TableItem/TableItem'


const TableComponent = ({ data }) => {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Расстояние</th>
                </tr>
            </thead>
            <tbody>
                {data.length && data.map((item, index) => (<TableItem {...item} key={index} />)
                )}
            </tbody>
        </Table>
    )
}

export default TableComponent