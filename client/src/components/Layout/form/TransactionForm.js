import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export const TransactionForm = () => {
  return (
    <Form className="mb-5">
      <Row className="g-2">
        <Col md="2">
          <Form.Select placeholder="choose">
            <option value="">Choose</option>
            <option value="">expense</option>
            <option value="">income</option>
          </Form.Select>
        </Col>
        <Col md="5">
          <Form.Control placeholder="Title" />
        </Col>
        <Col md="2">
          <Form.Control placeholder="Amount" />
        </Col>
        <Col md="2">
          <Form.Control type="submit" className="btn btn-primary" />
        </Col>
      </Row>
    </Form>
  );
};
