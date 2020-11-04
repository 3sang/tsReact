import React, { useEffect, useState } from "react";
import { Input, Form,Button } from "antd";
import { ColumnProps } from "antd/es/table";

interface formProps {
  onSubmit: (value: string) => void;
}

export default function FormFC(props: formProps): JSX.Element {

  return (
    <>
      <Form
        name="basic"
        initialValues={{ text: "来啊" }}
        onFinish={(value) => console.log(value)}
        onFinishFailed={value=>console.log(value)}
      >
        <Form.Item
          label="要做的事情"
          name="text"
          rules={[{ required: true, message: "今天你要做的事还没写" }]}
        >
          <Input />
        </Form.Item>
        <Button >提交</Button>
      </Form>
    </>
  );
}
