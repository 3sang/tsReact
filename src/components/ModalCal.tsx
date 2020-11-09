import React, { useEffect, useState } from 'react';
import { Modal, Form, Input, Row, Col } from 'antd';
import _ from 'lodash';
import { ModalProps } from 'antd/lib/modal';

/** modal的参数 */

export default function ModalCal<ModalProps>(props: ModalProps) {
  const [form] = Form.useForm();
  const [result, setresult] = useState('0');

  return (
    <Modal {...props}>
      <h1>{result}</h1>
      <Form
        form={form}
        onValuesChange={(changedFields: object, allFields: object) => {
          let sum = 0;
          let p1 = 0,
            p2 = 0,
            flag = false;
          _.map(_.values(allFields), (d, i) => {
            if (typeof d === 'string') {
              if (i % 2 === 0) {
                // 奇数
                p1 = d;
                flag = false;
              } else {
                // 偶数
                p2 = d;
                flag = true;
              }
              if (flag) {
                sum += ((Math.round(p1 * 1000) / 1000) * Math.round(p2 * 1000)) / 1000;
              }
            }
          });
          setresult(sum.toFixed(2));
        }}
      >
        <Row gutter={16}>
          <Col>
            <Form.Item name="value1" label="1">
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="value2" label="2">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col>
            <Form.Item name="value3" label="3">
              <Input />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item name="value4" label="4">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
}
