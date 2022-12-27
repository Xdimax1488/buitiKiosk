import React from 'react'

const Orders = () => {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Id</th>
                <th>STATUS</th>
                <th>DATE</th>
                <th>TOTAL</th>
            </tr>
        </thead>
        <tbody>
            <tr className={'alert-good'}>
                <td>
                    <a href={`/`}>
                    1
                    </a>
                </td>
                <td>Paid</td>
                <td>Dec 12 2022</td>
                <td>40$</td>
            </tr>
            <tr className={'alert-danger'}>
                <td>
                    <a href={`/`}>
                    2
                    </a>
                </td>
                <td>Not Paid</td>
                <td>Dec 12 2022</td>
                <td>40$</td>
            </tr>

        </tbody>
    </table>
  )
}

export default Orders