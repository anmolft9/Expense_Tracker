import React from "react";
import { Container, Row } from "react-bootstrap";
import { TransactionForm } from "../components/Layout/form/TransactionForm";
import { MainLayout } from "../components/Layout/MainLayout";
import { TransactionTable } from "../components/Layout/transaction-table/TransactionTable.js";

export const Dashboard = () => {
  return (
    <MainLayout>
      <Container>
        <Row>
          <h3 className="mt-4">Dashboard</h3>
          <TransactionForm />
          <TransactionTable />
        </Row>
      </Container>
    </MainLayout>
  );
};
