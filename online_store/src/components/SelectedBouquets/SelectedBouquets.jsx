import React from 'react';
import useProductList from '../../hooks/useProductList';
import styles from './selectedBouquets.module.scss';
import { Link } from 'react-router-dom';
import Order from '../../views/Order/Order';
import {Table, Row, Col, Image} from 'antd'



function SelectedBouquets() {

//   const dataSource = [
//     {
// name:	"new_york",
// name_title:	"Букет Нью-Йорк S",
// sku:	41186,
// type:	"bouquet",
// size:	"S",
// price:	1799,
// description:	
// {
// title:	"Букет из клубники в шоколаде",
// gift_size:	"ширина 16см х высота 22см",
// ingredients:	"Свежая клубника в бельгийском шоколаде - 10 шт, клубника без шоколада- 6 шт",
// product_details: {
// berries: {	
// 0:	"клубника"
// },
// chocolate:
// {	
// 0:	"молочный"
// },
// topping:	"малина сублимированная, кокосовая стружка"
// },
// photos: {
// 0:	"http://drive.google.com/uc?export=view&id=1WxIjt2Honsm2A9TUX0TSojukLRs1s7is",
// 1:	"http://drive.google.com/uc?export=view&id=1CUdv4muNXn32p_kHAflbw6KHJdsEQ9e9",
// 2:	"http://drive.google.com/uc?export=view&id=1qo6DNn2-rCkuyyPY14v0ORgRDRmz8-N8",
// }
// }
//       },
// {
//   name:	"new_york",
//   name_title:	"Букет Нью-Йорк S",
//   sku:	41186,
//   type:	"bouquet",
//   size:	"S",
//   price:	1799,
//   description:	
//   {
//   title:	"Букет из клубники в шоколаде",
//   gift_size:	"ширина 16см х высота 22см",
//   ingredients:	"Свежая клубника в бельгийском шоколаде - 10 шт, клубника без шоколада- 6 шт",
//   product_details: {
//   berries: {	
//   0:	"клубника"
//   },
//   chocolate:
//   {	
//   0:	"молочный"
//   },
//   topping:	"малина сублимированная, кокосовая стружка"
//   },
//   photos: {
//   0:	"http://drive.google.com/uc?export=view&id=1WxIjt2Honsm2A9TUX0TSojukLRs1s7is",
//   1:	"http://drive.google.com/uc?export=view&id=1CUdv4muNXn32p_kHAflbw6KHJdsEQ9e9",
//   2:	"http://drive.google.com/uc?export=view&id=1qo6DNn2-rCkuyyPY14v0ORgRDRmz8-N8",
//   }
//   }
// }
//   ]

//   const columns = [
//   {
//     title: 'Фото букета',
//     dataIndex: 'photo',
//     key: 'photo',
//     render: (photos) => <Image src={photos} alt="bouquet_photo" width={100} />
//   },
//     {
//     title: 'Название',
//     dataIndex: 'name_title',
//     key: 'title',
//     // render: (text) => <Link to={"/bouquet/${id}"}/>
//     },
//     {
//       title: 'Описание',
//       dataIndex: 'description',
//       key: 'description'
//     },
//     {
//       title: 'Количество',
//       dataIndex: 'quantity',
//       key: 'quantity'
//     },
//     {
//       title: 'Стоимость',
//       dataIndex: 'price',
//       key: 'price'
//     }
// ]

  let sum = 0;
  // productList.forEah(el => sum += Number.parseFloat(el.price))

  return (
    <>
      <div className={styles.bouquetWrapper}>
        {/* <Row>
          <Col>
            <Table
              dataSource={dataSource}
              columns={columns}
          />
          </Col>
        </Row> */}
        <Order />
      </div>
      <div className={styles.table__footer}>
        <div className={styles.sum}>Сумма заказa </div>
        <div className={styles.summary}>{sum}</div>
      </div>
      
    </>
  )
}

export default SelectedBouquets;
