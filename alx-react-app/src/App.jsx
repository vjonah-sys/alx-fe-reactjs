// src/App.jsx
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />

      <UserProfile 
        name="Jonah" 
        age="30" 
        bio="A software developer who enjoys traveling" 
      />
    </>
  );
}

export default App;
