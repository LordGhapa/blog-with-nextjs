/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function notFount() {
  const [time, setTime] = useState(3);
  const router = useRouter();
  useEffect(() => {
    const changePageTime = setInterval(function () {
      setTime((s) => (s = s - 1));
    }, 1000);

    return () => {
      clearInterval(changePageTime);
    };
  }, []);

  useEffect(() => {
    if (time <= 0) {
      router.push('/');
    }
  }, [router, time]);
  return (
    <h1>PAGINA NÃO ENCONTRADA OU SEM POST retornando ao inicio em {time} </h1>
  );
}
