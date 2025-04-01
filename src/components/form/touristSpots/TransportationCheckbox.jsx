import transportData from '../../../assets/json/transport_options.json';
import Checkbox from './formElements/Checkbox';
const transport = transportData;

export default function TransportationCheckbox({ register }) {
  return (
    <>
      <Checkbox
        label="交通工具"
        name="transport"
        CheckboxData={transport}
        register={register}
      />
    </>
  );
}
