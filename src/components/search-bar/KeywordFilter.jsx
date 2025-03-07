export default function KeywordFilter({register}) {
  return (
    <>
      <div className="col">
        <div className="form-floating">
          <input
            {...register('searchQuery')}
            type="text"
            className="form-control"
            id="searchQuery"
            placeholder="關鍵字搜尋"
          />
          <label htmlFor="searchQuery">關鍵字搜尋</label>
        </div>
      </div>
    </>
  )
}