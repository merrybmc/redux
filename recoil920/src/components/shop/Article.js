import React from 'react';
import { useRecoilValue } from 'recoil';
import { count } from '../../store';

export default function Article() {
  const value = useRecoilValue(count);

  return (
    <div>
      shop Article <p>상태값 : {value}</p>
    </div>
  );
}
