import React from "react";
import { Button, NavItem } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const TransactionTable = ({ transaction, handleOnDelete }) => {
  const total = transaction.reduce((acc, { type, amount }) => {
    return type === "income" ? acc + amount : acc - amount;
  }, 0);
  // console.log(transaction);
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transaction.length > 0 &&
            transaction.map((item, i) => {
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{new Date(item.date).toLocaleDateString()}</td>
                  {/* <td>{item.date}</td> */}
                  <td>{item.title}</td>
                  <td className="text-danger">
                    {item.type === "expense" && "-" + item.amount}
                  </td>
                  <td>{item.type === "income" && +item.amount}</td>
                  <td>
                    {
                      <Button
                        variant="danger"
                        onClick={() => {
                          handleOnDelete(item._id);
                        }}
                      >
                        Delete
                      </Button>
                    }
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <div className="text-end"> Balance: ${total}</div>
    </>
  );
};
