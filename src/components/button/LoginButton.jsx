import { Link } from 'react-router';

export default function LoginButton({ classStyle }) {
  return (
    <>
      <Link
        className={`${classStyle} btn rounded-pill btn-sm btn-white w-lg-auto w-100 justify-content-center`}
        to={'auth/login'}
      >
        登入
      </Link>
    </>
  );
}
