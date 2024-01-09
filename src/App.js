import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';
import AddItem from "./AddItem";
import Searchitem from "./Searchitem";
// import './index.css';

function App() {
  
  const [items,setItems] = useState(
    JSON.parse(localStorage.getItem('todo_list'))
  );
  //for storing the typing strings of input in a state 
  const [newItem,setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const addItem = (item) => {

    const id = items.length ? items[items.length-1].id +1 : 1;
    const addNewItem = {id, checked:false, item};
    const listItems = [...items, addNewItem];
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));
  }

  const handleCheck = (id) => {
    const listItems=items.map((item) => 
    item.id===id ? {...item, checked: !item.checked}: item)//...item is used becoz it only stores the changed checks and leaves the rem things in object so if we use thatit will stores all the rem elts in new array  
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));//to store changes

  }

  const handleDelete = (id) => {
    const listItems=items.filter((item) =>
    item.id!==id)
    setItems(listItems);
    localStorage.setItem("todo_list",JSON.stringify(listItems));

  }
   
  const handleSubmit = (e) => {
    e.preventDefault()//used becoz whenever a action occurs the default behaviour of html forms will reload the page so we have to prevnt that
    if(!newItem)return;
    console.log('submitted');
    //addItem
    addItem(newItem);
    setNewItem('');//it will clear the input after submitting
  }


  return (
    <div className="App">
     <Header title="Todo List" />
     <AddItem
       newItem={newItem}
       setNewItem={setNewItem}
       handleSubmit={handleSubmit}
     />
     <Searchitem
     search={search}
     setSearch={setSearch}
     />
     {/* implementing search in content page by filtering the itemName(item) in items list */}
     <Content 
      items={items.filter((item) => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
     />
     <Footer 
     length={items.length}
     />
    </div>
  );
}

export default App;
