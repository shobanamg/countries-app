interface InfoFieldProps {
  fieldName: string;
  fieldValue: string;
}
const InfoField = ({ fieldName, fieldValue }: InfoFieldProps) => {
  return (
    !!fieldValue && (
      <div className="sm:w-72 lg:w-60 flex gap-2 text-sm">
        <h3 className="font-semibold">{fieldName}</h3>
        <p className="font-light">{fieldValue}</p>
      </div>
    )
  );
};
export default InfoField;
