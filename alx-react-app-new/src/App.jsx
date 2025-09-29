// src/App.jsx
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <MainContent />
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
      <Footer />
    </>
  );
}

export default App;
