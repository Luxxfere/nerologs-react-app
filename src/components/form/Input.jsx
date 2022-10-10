const Input = ({ name, type, label, register }) => {
  return (
    <div className="customInput">
      <label> {label}:</label>
      <input type={type} {...register(name, {required: true})} />
    </div>
  );
};

export default Input;
