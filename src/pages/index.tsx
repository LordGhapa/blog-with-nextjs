import React, { useEffect, useState } from 'react';
import { loadPosts } from '../api/load-posts';

export default function Index() {
  const [data, setData] = useState('');
  useEffect(() => {
    loadPosts().then((r) => {
      const info = r.setting.data.id == '2' ? 'DEU CERTO' : 'ERROOO';
      console.log(r);

      console.log(r.setting.data.id);
      setData(info);
    });
  }, []);
  return <h1>{data}</h1>;
}
