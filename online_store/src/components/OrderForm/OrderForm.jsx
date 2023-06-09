import React, { useState } from 'react';
import {
  Button,
  Form,
  Input,
  DatePicker,
  Typography,
  Space,
  Select,
  Radio,
  Checkbox,
} from 'antd';

import { GoogleMap, useLoadScript } from '@react-google-maps/api';

import styles from './order-form.module.scss';

const { Text } = Typography;
const { Option } = Select;

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
console.log(API_KEY);

const containerStyle = {
  width: '400px',
  height: '400px',
};

const onFinish = (values) => {
  console.log(values);
};

const onChangeC = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const validateMessages = {
  required: 'Укажите Ваше имя',
  types: {
    email: 'Email is not a valid email!',
    phone: 'Phone is not a valid phone!',
  },
};

function Map() {
  return <GoogleMap zoom={10} center={{ lat: 44, lng: -80 }} mapContainerStyle={containerStyle} />;
}

function OrderForm() {
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <Space className={styles.orderFormWrapper}>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
        validateMessages={validateMessages}
        className={styles.orderForm}
      >
        <Form.Item
          name={['user', 'name']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Ваше имя" />
        </Form.Item>

        <Form.Item
          name={['user', 'phone']}
          rules={[
            {
              type: 'phone',
            },
          ]}
        >
          <Input placeholder="+357-xx-xxx-xxx" />
        </Form.Item>

        <Form.Item
          name={['user', 'email']}
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input placeholder="Ваш e-mail" />
        </Form.Item>

        <Form.Item
          name={['user', 'date']}
          rules={[
            {
              type: 'date',
            },
          ]}
        >
          <DatePicker placeholder="Выберите дату" />
        </Form.Item>

        <Space className={styles.deliveryTimeContainer}>
          <Text>Интервал доставки</Text>
          <Text>
            На изготовление заказа нам потребуется 3 часа.
            Заказы, оформленные после 18:00, доставляются на следующий день.
          </Text>
        </Space>
        <Form.Item
          name="select"
          hasFeedback
          rules={[{ required: true, message: 'Выберите время доставки' }]}
        >
          <Select placeholder="Выберите время доставки">
            <Option value="09:00-11:00">09:00-11:00</Option>
            <Option value="11:00-13:00">11:00-13:00</Option>
            <Option value="13:00-15:00">13:00-15:00</Option>
            <Option value="15:00-17:00">15:00-17:00</Option>
            <Option value="17:00-19:00">17:00-19:00</Option>
            <Option value="19:00-21:00">19:00-21:00</Option>
          </Select>
        </Form.Item>

        <Space className={styles.deliveryContainer}>
          <Text>Способ доставки</Text>
        </Space>
        <Form.Item>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>Самовывоз</Radio>
            <Radio value={2}>Доставка до квартиры</Radio>
          </Radio.Group>
        </Form.Item>
        {value === 2 ? (
          <Form.Item
            name={['user', 'address']}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Введите адрес доставки или выберите точку на карте" />
          </Form.Item>
        ) : (
          <Text>Самовывоз по адресу: Γεωρ. Α 87, Γερμασόγεια</Text>
        )}

        <Form.Item>
          <Checkbox onChange={onChangeC}>Уточнить адрес и время у получателя</Checkbox>
        </Form.Item>

        <Text>Если заказ получаете не Вы, заполните также контакты получателя</Text>
        <Form.Item
          name={['recipient', 'name']}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Имя получателя" />
        </Form.Item>
        <Form.Item
          name={['recipient', 'phone']}
          rules={[
            {
              type: 'phone',
            },
          ]}
        >
          <Input placeholder="Телефон получателя +357-xx-xxx-xxx" />
        </Form.Item>
        <Form.Item
          name={['recipient', 'card']}
          rules={[
            {
              type: 'text',
            },
          ]}
        >
          <Input placeholder="Текст открытки" />
        </Form.Item>
        <Form.Item name={['recipient', 'introduction']}>
          <Input.TextArea placeholder="Комментарий" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <Space>
        <Map />
      </Space>
    </Space>
  );
}

export default OrderForm;
