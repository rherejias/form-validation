import { useState } from 'react';
import { Button, Form, Input, Select } from 'antd';
import './App.css';

const { Option } = Select;

function App() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const [selectedAnimal, setSelectedAnimal] = useState("");

  console.log(selectedAnimal)
  return (
    <div className="App">
      <div className='form_container'>
        <h1>Contact Form</h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            wrapperCol={{ span: 24 }}
            name="username"
            rules={[{ type: 'email', required: true, message: 'Email Address is not a valid email.' }]}
          >
            <Input placeholder='Email Address' />
          </Form.Item>

          <Form.Item
            wrapperCol={{ span: 24 }}
            name="password"
            rules={[{ required: true, min: 8, message: 'Password must be longer than 8 characters.' }]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }} name="colour" rules={[{ required: true, message: 'Colour is required.' }]}>
            <Select
              placeholder="Select Colour"
            >
              <Option value="blue">Blue</Option>
              <Option value="green">Green</Option>
              <Option value="red">Red</Option>
              <Option value="black">Black</Option>
              <Option value="brown">Brown</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 24 }} name="animals" rules={[{ required: true, message: 'Animal is required.' }]}>
            <Select
              mode="multiple"
              placeholder="Select Animals"
              onChange={e => setSelectedAnimal(e)}
            >
              <Option value="bear">Bear</Option>
              <Option value="tiger">Tiger</Option>
              <Option value="snake">Snake</Option>
              <Option value="donkey">Donkey</Option>
            </Select>
          </Form.Item>

          {selectedAnimal.includes('tiger') && <Form.Item
            wrapperCol={{ span: 24 }}
            name="tiger_type"
            rules={[{ required: true, message: 'Tiger type is required.' }]}
          >
            <Input placeholder='Tiger Type' />
          </Form.Item>}


          <Form.Item wrapperCol={{ span: 24 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
}

export default App;
