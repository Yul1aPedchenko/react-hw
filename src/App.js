import "./App.css";
// 2
const name = "Yulia";
// 4
const imgURL =
  "https://www.wordforest.org/wp-content/uploads/2016/12/forest-4-e1483856441969.jpg";
const imgAlt = "forest";
// 5, 6
const favWebsite = {
  name: "YouTube",
  url: "https://www.youtube.com/?app=desktop&gl=UA&hl=uk",
};
// 7
const firstNum = 17;
const secondNum = 5;

// 8
const colors = ["red", "blue", "green"];
const markUp = colors.map((color) => {
  return <li key={color}>{color}</li>;
});

function App() {
  return (
    <div className="App">
      <h1 className="name">{name}</h1>
      <img src={imgURL} alt={imgAlt} />
      <a href={favWebsite.url}>{favWebsite.name}</a>
      <p>
        {firstNum} + {secondNum} = {firstNum + secondNum}
      </p>
      <ul>{markUp}</ul>
    </div>
  );
}

export default App;
