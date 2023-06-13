import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'; // useLoadScript
import { submitFormAC } from '../../store/actions/mainActions';
import styles from './order-form.module.scss';

const { Text } = Typography;
const { Option } = Select;

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: '500px',
  height: '500px',
};

// const libraries = ['places'];

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
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 34.69705133064743, lng: 33.09065538465354 }}
      mapContainerStyle={containerStyle}
    >
      <Marker position={{ lat: 34.69705133064743, lng: 33.09065538465354 }} />
    </GoogleMap>
  );
}

function OrderForm() {
  const [value, setValue] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [address, setAddress] = useState('');
  const [recipient, setRecipient] = useState('');
  const [recipientPhone, setRecipientPhone] = useState('');
  const [card, setCard] = useState('');
  const [comment, setComment] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const onChangeDate = (valueDate) => {
    setDate(valueDate);
    console.log(valueDate);
  };

  const onChangeTime = (valueTime) => {
    setDate(valueTime);
    console.log(valueTime);
  };

  const onFinish = (e) => {
    e.preventDefault();

    if (name) {
      dispatch(submitFormAC({
        name,
        phone,
        email,
        date,
        id: Date.now(),
        time,
        address,
        recipient,
        recipientPhone,
        card,
        comment,
      }));
      navigate('/orderlist');
    }
    setName('');
    setPhone('');
    setEmail('');
    setDate(new Date());
    setTime('');
    setAddress('');
    setRecipient('');
    setRecipientPhone('');
    setCard('');
    setComment('');
    console.log('успех');
  };

  return (
    <Space className={styles.orderFormWrapper}>
      <Form
        name="nest-messages"
        onSubmit={onFinish}
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
          <Input
            placeholder="Ваше имя"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </Form.Item>

        <Form.Item
          name={['user', 'phone']}
          rules={[
            {
              type: 'phone',
            },
          ]}
        >
          <Input
            placeholder="+357-xx-xxx-xxx"
            onChange={(event) => setPhone(event.target.value)}
            value={phone}
          />
        </Form.Item>

        <Form.Item
          name={['user', 'email']}
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input
            placeholder="Ваш e-mail"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </Form.Item>

        <Form.Item
          name={['user', 'date']}
          rules={[
            {
              type: 'date',
            },
          ]}
        >
          <DatePicker
            placeholder="Выберите дату"
            onChange={onChangeDate}
            selected={date}
          />
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
          <Select placeholder="Выберите время доставки" onChange={onChangeTime}>
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
          <Radio.Group onChange={(e) => setValue(e.target.value)} value={value}>
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
            <Input
              placeholder="Введите адрес доставки или выберите точку на карте"
              onChange={(event) => setAddress(event.target.value)}
              value={address}
            />
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
          <Input
            placeholder="Имя получателя"
            onChange={(event) => setRecipient(event.target.value)}
            value={recipient}
          />
        </Form.Item>
        <Form.Item
          name={['recipient', 'phone']}
          rules={[
            {
              type: 'phone',
            },
          ]}
        >
          <Input
            placeholder="Телефон получателя +357-xx-xxx-xxx"
            onChange={(event) => setRecipientPhone(event.target.value)}
            value={recipientPhone}
          />
        </Form.Item>
        <Form.Item
          name={['recipient', 'card']}
          rules={[
            {
              type: 'text',
            },
          ]}
        >
          <Input
            placeholder="Текст открытки"
            onChange={(event) => setCard(event.target.value)}
            value={card}
          />
        </Form.Item>
        <Form.Item name={['recipient', 'introduction']}>
          <Input.TextArea
            placeholder="Комментарий"
            onChange={(event) => setComment(event.target.value)}
            value={comment}
          />
        </Form.Item>

        <Space className={styles.deliveryContainer}>
          <Text>Сумма: </Text>
          <Text>рублей</Text>
        </Space>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Заказать
          </Button>
        </Form.Item>
      </Form>
      <Space>
        {isLoaded ? <Map /> : <h2>Loading...</h2>}
      </Space>
    </Space>
  );
}

export default OrderForm;
