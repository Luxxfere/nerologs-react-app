import { useState } from 'react';
import Form from './components/form/Form';
import Header from './components/Header';
import Nerolog from './components/Nerolog';
import { INITIAL_NEKROLOGS } from './constants';

function App() {
  const [nekrologs, setNekrologs] = useState([...INITIAL_NEKROLOGS]);

  const zapalZnicz = (id) => {
    let copy = [...nekrologs];
    copy[id].znicz = !copy[id].znicz;
    setNekrologs(copy);
  };

  return (
    <div className="App">
      <Header />
      <Form setNekrologs={setNekrologs} nekrologs={nekrologs} />
      <div className='nekrolog-list'>
        {nekrologs?.map(({ name, age, date, znicz }, index) => {
          return (
            <Nerolog
              key={index}
              name={name}
              age={age}
              date={date}
              znicz={znicz}
              onClick={() => zapalZnicz(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
