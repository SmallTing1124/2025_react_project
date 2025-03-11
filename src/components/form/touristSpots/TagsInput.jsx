import { useState } from 'react';

export default function TagsInput({ register, watch, setValue }) {
  const watchTags = watch('tags');

  const [newTag, setNewTag] = useState('');

  const handleGetTag = (e) => {
    setNewTag(e.target.value);
  };

  const handleAddTag = () => {
    if (newTag && !watchTags.includes(newTag)) {
      const updatedTag = [...watchTags, newTag];
      setValue('tags', updatedTag);
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTag = watchTags.filter((tag) => tag !== tagToRemove);
    setValue('tags', updatedTag);
  };

  return (
    <>
      <div className="row mb-4">
        <label htmlFor="addTags" className="col-md-2 col-form-label">
          新增標籤
          {/* <span className="text-danger">*</span> */}
        </label>
        <div className="col-md-10">
          <ul className="list-inline d-flex flex-row flex-wrap gap-2">
            <input type="hidden" name="tags" {...register('tags')} />
            {watchTags &&
              watchTags.map((tag) => {
                return (
                  <li key={tag}>
                    <button
                      className="btn tag border-2"
                      type="button"
                      onClick={() => {
                        handleRemoveTag(tag);
                      }}
                    >
                      <span className="text-primary">#</span>
                      {tag}
                    </button>
                  </li>
                );
              })}

            <li className="newTag">
              <button
                className="btn tag tag-add"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span className="material-symbols-outlined">add_circle</span>
                新增標籤
              </button>
            </li>
          </ul>
          <div className="collapse" id="collapseExample">
            <div className="mb-5">
              <div className="col-md-7">
                <div className="input-group ">
                  <input
                    name="addTag"
                    type="text"
                    className="form-control"
                    placeholder="請填景點標籤"
                    onChange={handleGetTag}
                    value={newTag}
                  />
                  <button
                    className="btn btn-primary"
                    type="button"
                    id="addTagBtn"
                    onClick={handleAddTag}
                  >
                    新增
                  </button>
                </div>
              </div>

              <small className="text-gray-600 d-inline-block ps-6 pt-3">
                {watchTags && watchTags.includes(newTag) && (
                  <span className="text-danger d-block">
                    標籤已經存在！請選擇其他標籤或創建新的標籤。
                  </span>
                )}
                {watchTags && (
                  <span className="d-block">
                    再次點擊你提交的標籤可刪除。
                    {/* <br /> 為了管理質量，新建的標籤需審核，審核結果不會另外通知 */}
                  </span>
                )}
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
