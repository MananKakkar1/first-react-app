import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = [
    "New York",
    "San Francisco",
    "Los Angeles",
    "Chicago",
    "Houston",
  ];

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  //      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
  return (
    <div>
      <Alert>
        Hello <span> World </span>
      </Alert>
      <Button text="Hi Back" color="dark" onClick={handleButtonClick}/>
    </div>
  );
}

export default App;
