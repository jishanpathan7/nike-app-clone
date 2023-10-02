const CustomButton = ({
  label,
  iconUrl,
  backGroundColor,
  textColor,
  borderColor,
  fullWidth
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 
      border font-montserrat text-lg leading-none
      ${ backGroundColor ? `${backGroundColor} ${textColor} ${borderColor}`: 
       'bg-coral-red rounded-full text-white border-coral-red'} rounded-full ${fullWidth && 'w-full'}}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow-icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};
export default CustomButton;
