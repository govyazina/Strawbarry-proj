/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { sendOrderThunk } from '../../store/actions/mainActions';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';

import {
  Input,
  DatePicker,
  Typography,
  Space,
  Select,
  Radio,
  // Checkbox,
} from 'antd';

import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'; // useLoadScript
// import { submitFormAC } from '../../store/actions/mainActions';
import styles from './order-form.module.scss';

const { Text } = Typography;

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: '500px',
  height: '500px',
};

// const libraries = ['places'];

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
  const [radio, setRadio] = useState(1);
  // const [name, setName] = useState('');
  // const [phone, setPhone] = useState('');
  // const [email, setEmail] = useState('');
  // const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState('');
  // const [address, setAddress] = useState('');
  // const [recipient, setRecipient] = useState('');
  // const [recipientPhone, setRecipientPhone] = useState('');
  // const [card, setCard] = useState('');
  // const [comment, setComment] = useState('');

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(sendOrderThunk());
  // }, [dispatch]);

  // const sendOrder = () => {
  //   dispatch(sendOrderThunk());
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm({ mode: 'onBlur' });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  // const handleSubmitq = (e) => {
  //   e.preventDefault();

  //   if (name) {
  //     dispatch(submitFormAC({
  //       name,
  //       phone,
  //       email,
  //       date,
  //       id: Date.now(),
  //       time,
  //       address,
  //       recipient,
  //       recipientPhone,
  //       card,
  //       comment,
  //     }));
  //     navigate('/orderlist');
  //   }
  //   setName('');
  //   setPhone('');
  //   setEmail('');
  //   setDate(new Date());
  //   setTime('');
  //   setAddress('');
  //   setRecipient('');
  //   setRecipientPhone('');
  //   setCard('');
  //   setComment('');
  //   console.log('успех');
  // };

  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data));
    navigate('/orderlist');
  };

  return (
    <Space className={styles.orderFormWrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          render={({ field }) => <Input {...field} placeholder="Ваше имя" />}
          name="name"
          rules={{ required: true }}
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <Input {...field} placeholder="Телефон +357-xx-xxx-xxx" />}
          name="phone"
          type="phone"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <Input {...field} placeholder="Ваш e-mail" />}
          name="email"
          type="email"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => (
            <DatePicker
              {...field}
              onChange={(e) => field.onChange(e)}
              selected={field.value}
              placeholder="Выберите дату"
            />
          )}
          name="date"
          type="date"
          control={control}
          defaultValue=""
        />
        <Space className={styles.deliveryTimeContainer}>
          <Text>Интервал доставки</Text>
          <Text>
            На изготовление заказа нам потребуется 3 часа.
            Заказы, оформленные после 18:00, доставляются на следующий день.
          </Text>
        </Space>
        <Controller
          className={styles.orderSelect}
          name="time"
          control={control}
          defaultValue="09:00-11:00"
          render={({ field }) => (
            <Select
              {...field}
              options={[
                { value: '09:00-11:00', label: '09:00-11:00' },
                { value: '11:00-13:00', label: '11:00-13:00' },
                { value: '13:00-15:00', label: '13:00-15:00' },
                { value: '15:00-17:00', label: '15:00-17:00' },
                { value: '17:00-19:00', label: '17:00-19:00' },
                { value: '19:00-21:00', label: '19:00-21:00' },
              ]}
            />
          )}
        />
        <Space className={styles.deliveryContainer}>
          <Text>Способ доставки</Text>
        </Space>
        <Controller
          control={control}
          name="delivery"
          // defaultValue="no"
          render={({ field: { value } }) => (
            <Radio.Group
              value={value}
              onChange={(e) => setRadio(e.target.value)}
            >
              <Radio value={1}>Самовывоз</Radio>
              <Radio value={2}>Доставка до квартиры</Radio>
            </Radio.Group>
          )}
        />
        {radio === 2 ? (
          <Controller
            render={({ field }) => <Input {...field} placeholder="Введите адрес доставки или выберите точку на карте" />}
            name="address"
            control={control}
            defaultValue=""
          />
        ) : (
          <Controller
            render={() => <Text>Самовывоз по адресу: Γεωρ. Α 87, Γερμασόγεια</Text>}
            name="address"
            control={control}
            defaultValue=""
          />
        )}
        <Text>Если заказ получаете не Вы, заполните также контакты получателя</Text>
        <Controller
          render={({ field }) => <Input {...field} placeholder="Имя получателя" />}
          name="recipient-name"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <Input {...field} placeholder="Телефон получателя +357-xx-xxx-xxx" />}
          name="recipient-phone"
          type="phone"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <Input {...field} placeholder="Текст открытки" />}
          name="postcard"
          type="text"
          control={control}
          defaultValue=""
        />
        <Controller
          render={({ field }) => <Input.TextArea {...field} placeholder="Ваш комментарий" />}
          name="comment"
          control={control}
          defaultValue=""
        />
        <Space className={styles.deliveryContainer}>
          <Text>Сумма: </Text>
          <Text>рублей</Text>
        </Space>
        <input type="submit" />
      </form>
      <Space>
        {isLoaded ? <Map /> : <h2>Loading...</h2>}
      </Space>
    </Space>
  );
}

export default OrderForm;
