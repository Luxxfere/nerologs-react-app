import { useState } from 'react';
import Form from '../components/form/Form';
import Header from '../components/Header';
import Nekrolog from '../components/Nekrolog';
import { INITIAL_NEKROLOGS } from '../constans/initialNekrologs';
import lightCandle from '../helpers/lightCandle';

const App = () => {
  const [nekrologs, setNekrologs] = useState([...INITIAL_NEKROLOGS]);

  return (
    <div className="App">
      <Header />
      <Form setNekrologs={setNekrologs} nekrologs={nekrologs} />
      <div className="nekrolog-list">
        {nekrologs?.map(({ name, age, date, candle }, index) => {
          return (
            <Nekrolog
              key={index}
              name={name}
              age={age}
              date={date}
              candle={candle}
              onClick={() => setNekrologs(lightCandle(index, nekrologs))}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
