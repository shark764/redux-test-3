import { ChangeEvent, FormEvent, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import logo from './logo.svg';
import {
  changeUsersAge,
  changeUsersName,
  UserState,
} from './redux/slices/userSlice';
import type { RootState } from './redux/store';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [userState, setUserState] = useState<UserState>({
    name: user.name,
    age: user.age,
  });

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserState((currentState) => ({
      ...currentState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(changeUsersAge(userState.age));
    dispatch(changeUsersName(userState.name));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            onChange={onChange}
            placeholder="name"
          />
          <input
            type="text"
            name="age"
            id="age"
            onChange={onChange}
            placeholder="age"
          />
          <input type="submit" value="Change user details" />
        </form>
      </main>
    </div>
  );
};

export default App;
