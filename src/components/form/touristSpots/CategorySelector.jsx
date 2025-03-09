import { useEffect } from 'react';
import categoryData from '../../../assets/json/category_options.json';
export default function CategorySelector({ register, setValue, watch }) {
  const selectedCategory = watch('category');
  const selectedSubOptions = watch('subCategories');
  useEffect(() => {
    if (selectedSubOptions) {
      const groups = categoryData
        .filter((category) =>
          category?.options?.some((option) =>
            selectedSubOptions?.includes(option.label)
          )
        )
        .map((category) => ({
          group: category.group,
          subCategories: category.options
            .filter((option) => selectedSubOptions.includes(option.label))
            .map((option) => option.label),
        }));
      setValue('category', groups);
    }
  }, [selectedSubOptions, setValue]);
  return (
    <>
      <div className="row align-items-top mb-4">
        <label htmlFor="potCategory" className="col-md-2 col-form-label">
          景點類別<span className="text-danger">*</span>
        </label>
        <div className="col-md-10">
          <div className="category_content pt-3">
            <input type="hidden" {...register('category')} />
            <ul className="list-unstyled">
              {categoryData.map((cat) => (
                <li key={cat.group} className="mb-3">
                  <span>{cat.group}：</span>
                  {cat.options.map((option) => {
                    return (
                      <div
                        key={option.key}
                        className="form-check form-check-inline"
                      >
                        <input
                          {...register('subCategories')}
                          className="form-check-input"
                          type="checkbox"
                          id={option.key}
                          value={option.label}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={option.key}
                        >
                          {option.label}
                        </label>
                      </div>
                    );
                  })}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
