import { cookies } from 'next/headers';
import { getCookie } from '../util/cookies';
import SetCookieForm from './SetCookieForm';

export default function SetCookiePage() {
  const getCookieValue = getCookie('testCookie');
  console.log(getCookieValue);

  return (
    <>
      <div>Cookie value:{getCookieValue}</div>
      <SetCookieForm />
    </>
  );
}
