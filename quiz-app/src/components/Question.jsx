export default function Question({ data, selectedAnswer, handleAnswer }) {
  return (
    <div className="question">
      <h2>{data.question}</h2>
      <div className="options">
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {data.options.map((option, index) => {
            if (selectedAnswer === index) {
              return (
                <button
                  style={{ border: "3px solid #ffbf00" }}
                  onClick={() => handleAnswer(index, data.id)}
                >
                  {option}
                </button>
              );
            }
            return (
              <button onClick={() => handleAnswer(index, data.id)}>
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
