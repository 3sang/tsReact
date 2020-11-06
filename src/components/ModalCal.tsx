import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Row, Col } from 'antd';
import _ from 'lodash';
import { ModalProps } from 'antd/lib/modal';

/** modal的参数 */

export default function ModalCal<ModalProps>(props: ModalProps) {
  const [form] = Form.useForm();
  const [result, setresult] = useState(0);

  return (
    <Modal {...props}>
      <h1>{result}</h1>
      <Form
        form={form}
        onValuesChange={(changedFields: object, allFields: object) => {
          // d.match('/^(\d+)(.\d{0,2})?$/')
          // _.reduce(
          //   _.map(allFields, (d: string) => parseFloat(d).toFixed(2)),
          //   (sum: number, n: number) => sum + n,
          //   0
          // );
        }}
      >
        <Row gutter={16}>
          <Col>
            <Form.Item name="1" label="1">
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="2" label="2">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col>
            <Form.Item name="3" label="3">
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="4" label="4">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
