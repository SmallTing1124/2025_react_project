import { useForm } from 'react-hook-form';

export default function KeywordSearch() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
          {...register('searchInput')}
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
