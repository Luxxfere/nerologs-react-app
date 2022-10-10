import { useForm } from 'react-hook-form';
import Input from './Input';

const Form = ({ nekrologs, setNekrologs }) => {
  const onSubmit = (data) => {
    const newNekroList = [data, ...nekrologs];
    setNekrologs(newNekroList);
  };

  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <div className='form-wrapper'>
      <h1>Dodaj nekrolog</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name={'name'}
          register={methods.register}
          type="text"
          label="imię i nazwiwsko"
        />
        <Input
          name={'age'}
          register={methods.register}
          type="text"
          label="Wiek"
        />
        <Input
          name={'date'}
          register={methods.register}
          type="date"
          label="data śmierci"
        />
        <button type="submit">Dodaj</button>
      </form>
      {Object.keys(errors).length !== 0 ? (
        <p className="errorMessage">Wszystie pola są wymagane!</p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Form;
