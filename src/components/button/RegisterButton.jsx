import { Link } from 'react-router';

export default function RegisterButton({ classStyle }) {
  return (
    <>
      <Link
        to={'/auth/register'}
        className={`${classStyle} btn rounded-pill btn-sm btn-primary w-lg-auto w-100 justify-content-center`}
      >
        註冊
      </Link>
    </>
  );
}
