// 取得台灣地區資料
import taiwanRegionsData from '../../assets/json/taiwan_regions.json';
const taiwanRegions = taiwanRegionsData;
// 取得景點類別資料
import categoriesData from '../../assets/json/category_options.json';
const categories = categoriesData;

import { useForm } from 'react-hook-form';

import SelectFilter from './SelectFilter';
import RangeFilter from './RangeFilter';
import KeywordFilter from './KeywordFilter';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

export default function FilterPanel({
  setFiltertouristSpots,
  touristSpotsData,
}) {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const { register, handleSubmit, watch, setValue } = useForm({
    defaultValues: {
      searchQuery: '',
      addressCategory: -1,
      categoriesCategory: -1,
      ageRange: 0,
    },
  });

  const [filterConditions, setFilterConditions] = useState({});

  const watchSearchQuery = watch('searchQuery');



  useEffect(() => {
    setValue('searchQuery', keyword);
  }, [keyword, setValue]);

  useEffect(() => {
    onSubmit({
      searchQuery: watchSearchQuery,
      addressCategory: watch('addressCategory'),
      categoriesCategory: watch('categoriesCategory'),
      ageRange: watch('ageRange'),
      addressDetail: watch('addressDetail') || [],
      categoriesDetail: watch('categoriesDetail') || [],
    });
  }, [watchSearchQuery]);

  const onSubmit = (data) => {
    setFilterConditions({
      city: taiwanRegions[data.addressCategory]
        ? taiwanRegions[data.addressCategory]?.group
        : '',
      area: data.addressDetail.length > 0 ? data.addressDetail : [],
      category: categories[data.categoriesCategory]
        ? categories[data.categoriesCategory]?.group
        : '',
      categoryDetail:
        data.categoriesDetail.length > 0 ? data.categoriesDetail : [],
      keyword: data.searchQuery,
      ageRange: data.ageRange,
    });
  };

  useEffect(() => {
    const filterData = touristSpotsData.filter((touristSpot) => {
      if (filterConditions.city) {
        if (!touristSpot?.location?.city.includes(filterConditions.city)) {
          return false;
        }
      }
      if (filterConditions?.area?.length > 0) {
        if (
          !filterConditions?.area.some((area) =>
            area.includes(touristSpot?.location?.area)
          )
        ) {
          return false;
        }
      }

      if (filterConditions.category) {
        if (
          !touristSpot?.category?.some(
            (item) => item.group === filterConditions.category
          )
        ) {
          return false;
        }
      }
      if (filterConditions?.categoryDetail?.length > 0) {
        const isMach = touristSpot.category.some((cat) =>
          cat.subCategories.some(
            (sub) =>
              cat.group === filterConditions.category &&
              filterConditions.categoryDetail.includes(sub)
          )
        );
        if (!isMach) {
          return false;
        }
      }

      if (filterConditions.ageRange) {
        if (!(touristSpot.suitableAge >= filterConditions.ageRange)) {
          return false;
        }
      }

      if (filterConditions.keyword) {
        if (
          !touristSpot.name.includes(filterConditions.keyword) &&
          !touristSpot.tags.some((tag) =>
            tag.includes(filterConditions.keyword)
          )
        ) {
          return false;
        }
      }
      return true;
    });

    setFiltertouristSpots(filterData);
  }, [setFiltertouristSpots, touristSpotsData, filterConditions]);

  return (
    <>
      <section className="search-bar__area">
        <div className="container">
          <div className="row">
            <div className="col-12 position-relative">
              <div className="search-bar__content">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="row row-cols-lg-4 row-cols-1 g-3"
                >
                  <KeywordFilter register={register} />
                  <SelectFilter
                    labelName="地區"
                    dataType="address"
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    filteredData={taiwanRegions}
                  />
                  <SelectFilter
                    labelName="類別"
                    dataType="categories"
                    register={register}
                    watch={watch}
                    setValue={setValue}
                    filteredData={categories}
                  />
                  <RangeFilter
                    register={register}
                    watch={watch}
                    setValue={setValue}
                  />

                  <button
                    className="btn btn-secondary btn-search"
                    type="submit"
                    onClick={() => {
                      setValue('searchQuery', '');
                      setValue('ageRange', 0);
                      setValue('addressCategory', -1);
                      setValue('addressDetail', []);
                      setValue('categoriesCategory', -1);
                      setValue('categoriesDetail', []);
                    }}
                  >
                    重置
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
