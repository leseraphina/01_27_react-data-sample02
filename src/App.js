import List from "./components/List";

import items from './data2.json'
function App() {
  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;
