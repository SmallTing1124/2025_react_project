import facilityData from '../../../assets/json/facility_options.json';
import Checkbox from './formElements/Checkbox';
const facility = facilityData;

export default function FacilitiesCheckbox({ register, errors }) {
  return (
    <>
      <Checkbox
        label="周邊環境"
        name="facilities"
        CheckboxData={facility}
        register={register}
        errors={errors}
      />
    </>
  );
}
