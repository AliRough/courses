'use client';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authUserState } from '../state/atoms';

export default function VerifyEmail() {
  const [authUserdata, setAuthUser] = useRecoilState(authUserState);
  console.log('verfy ', authUserdata);

  return <div>verifyEmail</div>;
}
