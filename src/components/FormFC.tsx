import React from 'react';
import { Input, Form, Button } from 'antd';

interface iformProps {
  /** 回调函数，传回form表单填写的text数据 */
  onSubmit: (value: string) => void;
}

export default function FormFC(props: iformProps): JSX.Element {
  /** 实例化Form */
  const [form] = Form.useForm();

  /** 表单里的onFinish */
  const onFinish = <T extends {}>(values: T): void => {
    console.log('onFinish', values);
  };

  const onFinish1 = <T extends {}>(values: T): void => {
    console.log('onFinish1', values);
  };

  /** 点击提交按钮的submit，尝试不要把submit写在Form表单里的用法 */
  const onSubmit = (): void => {
    form.submit();
  };

  return (
    <>
      <Form form={form} name="formFC2" initialValues={{ formTest: '初始数据' }} onFinish={onFinish1}>
        <Form.Item name="formTest" label="第二个表单" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
      <Form form={form} name="formFC1" initialValues={{ text: '初始数据' }} onFinish={onFinish}>
        <Form.Item name="text" label="要做的事" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
      </Form>
      <Button onClick={onSubmit}>提交</Button>
    </>
  );
}

// Form 没有用useForm方法的
// <Form
// name="basic"
// /** 默认初始数据全部在Form里注入了，不用包装函数 */
// initialValues={{ text: '初始数据' }}
// /** 提交校验也不在button的onClick里，onFinish是成功的回调，onFinishFailed是失败的回调，注意Button要写在Form里，并且htmlType="submit" */
// onFinish={(value) => console.log(value)}
// onFinishFailed={(value) => console.log(value)}
// /** 不用提交，每一次数据变化都把值返回上层组件 */
// onFieldsChange={(changedFields, allFields) => console.log('onFieldsChange', changedFields, allFields)}
// onValuesChange={(changedFields, allFields) => console.log('onValuesChange', changedFields, allFields)}
// style={{ display: 'flex' }}
// >
// <Form.Item
//   /** 以前写在包装函数里的东西全部作为formItem的属性了 */
//   label="要做的事情"
//   name="text"
//   rules={[{ required: true, message: '今天你要做的事还没写' }]}
//   style={{ flex: 1, paddingRight: '10px' }}
// >
//   <Input />
// </Form.Item>
// {/* <Button htmlType="submit">提交</Button> */}
// </Form>
// end Form
