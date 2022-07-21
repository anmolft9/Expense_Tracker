import React from "react";
import Table from "react-bootstrap/Table";

export const TransactionTable = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Title</th>
            <th>Expenses</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>22/07</td>
            <td>Ipad</td>
            <td className="text-danger">-1500</td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>22/07</td>
            <td>Salaru</td>
            <td></td>
            <td className="">1500</td>
          </tr>
        </tbody>
      </Table>
      <div className="text-end"> Balance: 20$</div>
    </>
  );
};
