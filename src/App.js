import { useState } from "react";
import List from "./components/List";

import data from './data2.json'
function App() {
  const [order, setOrder] = useState('createdAt');
  const [items,setItems] = useState(data)

  const handleNewest = () => setOrder('createdAt');
  const handleCalorie = () => setOrder('calorie');



  const sortedItems = items.sort((a,b) => b[order]-a[order]);
  return (
    <div>
      <div className="btn">
        <button
          onClick={handleNewest}>최신순</button>
        <button
          onClick={handleCalorie}>칼로리순</button>
      </div>
      <List 
      items={sortedItems} 
      onDelete={(id)=>{
        const deleteItem = sortedItems.filter((item) => item.id !== id)
        setItems(deleteItem)
      }}
      />
    </div>
  );
}

export default App;
