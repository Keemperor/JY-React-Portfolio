import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
    <Nav
  categories={categories}
  setCurrentCategory={setCurrentCategory}
  currentCategory={currentCategory}
  contactSelected={contactSelected}
  setContactSelected={setContactSelected}
></Nav>
      <main>
      {!contactSelected ? (
  <>
   
    <About></About>
  </>
) : (
    <ContactForm></ContactForm>
  )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
