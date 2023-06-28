import { useEffect } from 'react';
import Posts from './components/Post';
import { useAppDispatch, useAppSelector } from './store/hooks/hooks';
import { fetchUsers } from './store/reducers/ActionCreator';
import './App.css'

function App() {
  const dispatch = useAppDispatch();
  const { users, isLoading, error } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  return (
    <>
      <div>
        {isLoading && <h1>ЗАГРУЗКА.....</h1>}
        {error && <h2>{error}</h2>}
        {users.length !== 0 && users.map(user => <p key={user.id}>{user.name}</p>)}
      </div>
      <Posts />
    </>
  );
}

export default App;
