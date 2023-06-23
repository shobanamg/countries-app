import { FC } from 'react';

interface InfoFieldProps {
  fieldName: string;
  fieldValue: string;
}
const InfoField: FC<InfoFieldProps> = ({ fieldName, fieldValue }) => {
  return (
    <div className="sm:w-72 lg:w-60 flex gap-2 text-sm">
      <h3 className="font-semibold">{fieldName}</h3>
      <p className="font-light">{fieldValue || 'NA'}</p>
    </div>
  );
};
export default InfoField;
