const ErrorMessage = ({ error }: unknown) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-bold-400 text-lg">
        {error.response?.status === 404
          ? 'No data found'
          : 'Something went wrong'}
      </p>
    </div>
  );
};

export default ErrorMessage;
