/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useForm, Controller } from 'react-hook-form';

import {
  Input,
  DatePicker,
  Typography,
  Space,
  Select,
  Radio,
  Modal,
} from 'antd';

// eslint-disable-next-line import/no-extraneous-dependencies
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'; // useLoadScript
// import useProductList from '../../hooks/useProductList';
import styles from './order-form.module.scss';

const { Text, Paragraph } = Typography;

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const containerStyle = {
  width: '100%',
  height: '100%',
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
  const [radio, setRadio] = useState('no');
  // const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY,
  });

  const { control, handleSubmit, reset } = useForm();
  const cart = useSelector((store) => store.mainStore.cart);

  console.log(cart);

  // const onSubmit = (data) => {
  //   console.log(JSON.stringify(data));
  //   navigate('/orderlist');
  // };

  // const orderData = {
  //   products: [
  //     {
  //       sku: 'string',
  //       count: 2,
  //       product_price: 2,
  //       product_details: {
  //         berries: 'string',
  //         topping: 'string',
  //       },
  //     },
  //   ],
  //   data: {
  //     name: 'string',
  //     phone: 'string',
  //     email: 'string',
  //     date: 'string',
  //     time: 'string',
  //     delivery: 'string',
  //     address: 'string',
  //     'recipient-name': 'string',
  //     'recipient-phone': 'string',
  //     postcard: 'string',
  //     comment: 'string',
  //   },
  //   price: {
  //     order_price: 2,
  //     delivery_price: 2,
  //     total_price: 2,
  //   },
  // };

  const onSubmit = (data) => {
    // const orderData = {

    // }

    // const res = await fetch('https://strawberry.nmsc.pchapl.dev/order', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // });
    // if (res.status === 200) {
    //   // вызвать модалку
    // } else {
    //   console.log('Error');
    // }
    console.log(JSON.stringify(data));
    setIsModalOpen(true);
    reset();
  };

  return (
    <div className={styles.orderFormWrapper}>
      <div className={styles.formItemsWrapper}>
        <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field }) => <Input className={styles.inputs} {...field} placeholder="Ваше имя" />}
            name="name"
            rules={{ required: true }}
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => <Input className={styles.inputs} {...field} placeholder="Телефон +357xxxxxxxxх" />}
            name="phone"
            type="phone"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => <Input className={styles.inputs} {...field} placeholder="Ваш e-mail" />}
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
                className={styles.inputs}
              />
            )}
            name="date"
            type="date"
            control={control}
            defaultValue=""
          />
          <Space className={styles.textContainer}>
            <Text className={styles.formTitle}>Интервал доставки</Text>
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
                className={styles.inputSelect}
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
          <Space className={styles.textContainer}>
            <Text className={styles.formTitle}>Способ доставки</Text>
          </Space>
          <Controller
            control={control}
            name="delivery"
            defaultValue="no"
            render={({ field: { value, onChange } }) => (
              <Radio.Group
                value={value}
                className={styles.formRadio}
                onChange={(e) => onChange(e.target.value) && setRadio(e.target.value)}
              >
                <Radio value="no" className={styles.formRad}>Самовывоз</Radio>
                <Radio value="yes" className={styles.formRad}>Доставка до квартиры - 500€</Radio>
              </Radio.Group>
            )}
          />
          {radio === 'yes' ? (
            <Controller
              render={({ field }) => <Input className={styles.inputs} {...field} placeholder="Введите адрес доставки или выберите точку на карте" />}
              name="address"
              control={control}
              defaultValue=""
            />
          ) : (
            <Controller
              render={() => (
                <Paragraph
                  className={styles.selfDelivery}
                >
                  Самовывоз по адресу: Γεωρ. Α 87, Γερμασόγεια
                </Paragraph>
              )}
              name="address"
              control={control}
              defaultValue=""
            />
          )}
          <Text
            className={styles.textContainer}
          >
            Если заказ получаете не Вы, заполните также контакты получателя

          </Text>
          <Controller
            render={({ field }) => <Input className={styles.inputs} {...field} placeholder="Имя получателя" />}
            name="recipient-name"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => <Input className={styles.inputs} {...field} placeholder="Телефон получателя +357xxxxxxxxх" />}
            name="recipient-phone"
            type="phone"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => <Input className={styles.inputs} {...field} placeholder="Текст открытки" />}
            name="postcard"
            type="text"
            control={control}
            defaultValue=""
          />
          <Controller
            render={({ field }) => <Input.TextArea className={styles.inputs} {...field} placeholder="Ваш комментарий" />}
            name="comment"
            control={control}
            defaultValue=""
          />
          <div className={styles.formButtonContainer}>
            <div>
              <Text className={styles.formPrice}>Сумма: </Text>
              <Text className={styles.formPrice}>рублей</Text>
            </div>
            <button className={styles.formButton} type="submit">Оформить заказ</button>
          </div>
          <Modal
            centered
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>Спасибо за заказ!</p>
          </Modal>

        </form>
      </div>
      <div className={styles.formItemsWrapper}>
        <div className={styles.formWrapper}>
          {isLoaded ? <Map /> : <h2>Loading...</h2>}
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
