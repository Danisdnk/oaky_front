
import { Line } from '@ant-design/charts';
import { useEffect, useState } from 'react';

export const Percentile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

// no
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: function formatter(v: string) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
    },
    
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };
  return <Line {...config} />;
  
};
