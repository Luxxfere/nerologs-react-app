const Nerolog = ({ name, age, date, znicz, index, onClick }) => {
  return (
    <div className="nekrolog" key={index}>
      <p>
        Z GŁĘBOKIM ŻALEM ZAWIADAMIAMY, ŻE DNIA <strong>{date}</strong>,<br /> W
        WIEKU <strong>{age}</strong> ZMARŁ
      </p>
      <h2>Ś.P {name}</h2>
      <div
        style={{
          cursor: 'pointer',
          fontSize: 50,
          filter: znicz ? 'drop-shadow(0 0 20px red)' : 'grayscale(80%)',
        }}
        onClick={() => onClick()}
      >
        🕯️
      </div>
      <span>zapal znicz</span>
    </div>
  );
};

export default Nerolog;
