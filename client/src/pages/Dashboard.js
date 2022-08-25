import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { TransactionForm } from "../components/Layout/form/TransactionForm";
import { MainLayout } from "../components/Layout/MainLayout";
import { TransactionTable } from "../components/Layout/transaction-table/TransactionTable.js";
import {
  deleteTransaction,
  getTransaction,
  postTransactions,
} from "../helpers/axiosHelper.js";

export const Dashboard = ({ isLoggedIn }) => {
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { status, message, trans } = await getTransaction();
    status === "success" && setTransaction(trans);
  };

  const postData = async (form) => {
    const user = JSON.parse(sessionStorage.getItem("user")); //to parse json file
    // console.log(user._id);
    const userId = user._id;
    // console.log(userId);
    const { status, message } = await postTransactions({ ...form, userId });
    toast[status](message);

    status === "success" && fetchData();
  };
  // console.log(transaction);

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this transaction")) {
      return;
    }
    // console.log(_id);
    const { status, message } = await deleteTransaction(_id);
    console.log(status, message);
    toast[status](message);
    status === "success" && fetchData();
  };

  return (
    <MainLayout isLoggedIn={isLoggedIn}>
      <Container>
        <Row>
          <h3 className="mt-4">Dashboard</h3>
          <TransactionForm postData={postData} />
          <TransactionTable
            transaction={transaction}
            handleOnDelete={handleOnDelete}
          />
        </Row>
      </Container>
    </MainLayout>
  );
};
