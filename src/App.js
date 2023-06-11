import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCart';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

// function App() {
//   return (
//     <div>
//     <section className="hero is-primary">
//       <div className="hero-body">
//         <p className="title">Personal Digital Assistants</p>
//       </div>
//     </section>

//     <div className="container">
//       <section className="section">
//         <div className="columns">
//           <div className="column is-4">
//             <ProfileCard
//               title="Alexa"
//               handle="@alexa99"
//               image={AlexaImage}
//               description="Alexa was created by Amazon and helps you buy things."
//             />
//           </div>
//           <div className="column is-4">
//             <ProfileCard
//               title="Cortana"
//               handle="@cortana32"
//               image={CortanaImage}
//               description="Cortana was made by Microsoft. Who knows what it does?"
//             />
//           </div>
//           <div className="column is-4">
//             <ProfileCard
//               title="Siri"
//               handle="@siri01"
//               image={SiriImage}
//               description="Siri was made by Apple and is being phased out"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   </div>
//   );
// }
// import Appcss from './App.css'
// import { useState } from 'react';
// import AnimalShow from './AnimalShow';

// function getRandomAnimal() {
//   const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

//   return animals[Math.floor(Math.random() * animals.length)];
// }

// function App() {
//   const [animals, setAnimals] = useState([]);

//   const handleClick = () => {
//     setAnimals([...animals, getRandomAnimal()]);
//   };
//   const renderedAnimals = animals.map((animal, index) => {
//     return <AnimalShow type={animal} key={index} />;
//   });

//   return (
//     <div className='app'>
//       <button onClick={handleClick}>Add Animal</button>
//       <div className="animal-list">{renderedAnimals}</div>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import ImageList from './components/ImageList';
// import searchImages from './api';


// function App() {
//   const [images, setImages] = useState([]);

//   const handleSubmit = async (term) => {
//     const result = await searchImages(term);

//     setImages(result);
//   };

//   return (
//     <div>
//       <SearchBar onSubmit={handleSubmit} />
//       <ImageList images={images} />
//     </div>
//   );
// }

// export default App;

import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
