import React from 'react';
import { TimePicker } from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import dayjs from 'dayjs';
// eslint-disable-next-line import/no-extraneous-dependencies
import customParseFormat from 'dayjs/plugin/customParseFormat';

export default function Main() {
  dayjs.extend(customParseFormat);
  const onChange = (time, timeString) => {
    // eslint-disable-next-line no-console
    console.log(time, timeString);
  };

  return (
    <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
  );
}
