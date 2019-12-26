/* eslint-disable arrow-parens */
import React, { useState } from 'react';

type FormInputHook = (
  name: string,
  type?: string,
) => [string, React.ReactElement];
type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const useFormInput: FormInputHook = (name, type = 'text') => {
  const [inputValue, setValue] = useState('');

  const handleChange = ({ target: { value } }: InputChangeEvent): void => {
    setValue(value);
  };

  return [
    inputValue,
    <input
      key={`${name}${type}`}
      name={name}
      value={inputValue}
      type={type}
      onChange={handleChange}
    />,
  ];
};

const Login = (): React.ReactElement => {
  const [username, UserInput] = useFormInput('username');
  const [password, PassInput] = useFormInput('password', 'password');

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.info({ username, password });
  };

  return (
    <main>
      <form onSubmit={onSubmit}>
        {UserInput}
        {PassInput}
        <input type="submit" />
      </form>
    </main>
  );
};

export default Login;
