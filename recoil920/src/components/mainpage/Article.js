import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { count } from '../../store';

export default function Article() {
  const navigate = useNavigate();

  const value = useRecoilValue(count);

  return (
    <div>
      <button onClick={() => navigate('/shop')}>쇼핑</button>
      mainpage Article <p>상태값 : {value}</p>
    </div>
  );
}
