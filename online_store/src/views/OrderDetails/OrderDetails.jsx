import React from 'react';
import { useParams } from 'react-router-dom';

export default function OrderDetails() {
  const { id } = useParams();

  return (
    <div>
      Hi
      {' '}
      {id}
    </div>
  );
}
