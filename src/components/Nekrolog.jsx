import candleImg from '../assets/img/candle.png';

const Nekrolog = ({ name, age, date, candle, index, onClick }) => {
  return (
    <div className="nekrolog" key={index}>
      <p>
        Z GŁĘBOKIM ŻALEM ZAWIADAMIAMY, ŻE DNIA <strong>{date}</strong>,<br /> W
        WIEKU <strong>{age}</strong> ZMARŁ
      </p>
      <h2>Ś.P {name}</h2>
      <img
        className={candle ? 'candle lighted' : 'candle'}
        src={candleImg}
        alt="candle"
        onClick={() => onClick()}
      />
      <span>zapal znicz</span>
    </div>
  );
};

export default Nekrolog;
