import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export default function KeywordSearch() {
  const navigate = useNavigate();

  const { register, handleSubmit ,reset} = useForm();

  const onSubmit = (data) => {
    navigate(`/tourist-spots?keyword=${encodeURIComponent(data.keyword)}`)
    reset()
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        id="searchForm"
        className="px-lg-4 px-2 rounded-pill ms-lg-0 ms-auto"
        role="search"
      >
        <label htmlFor="searchInput" className="d-flex align-items-center">
          <span className="material-symbols-outlined">search</span>
        </label>
        <input
          {...register('keyword')}
          className="form-control py-3 px-0"
          id="searchInput"
          type="search"
          placeholder="您想要找什麼景點？"
          aria-label="Search"
        />
      </form>
    </>
  );
}
