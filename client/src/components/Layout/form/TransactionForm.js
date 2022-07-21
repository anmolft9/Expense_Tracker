import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const TransactionForm = () => {
  return (
    <Form className="mb-5">
      <Row>
        <Col>
          <Form.Select placeholder="choose">
            <option value="">Choose</option>
            <option value="">expense</option>
            <option value="">income</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Control placeholder="Title" />
        </Col>
        <Col>
          <Form.Control placeholder="Amount" />
        </Col>
        <Col>
          <Button type="submit">Add</Button>
        </Col>
      </Row>
    </Form>
  );
};
