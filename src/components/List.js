import './List.css';

function ListItem({item}){
return (
  <li>
    <figure>
      <img src={item.imgUrl} alt={item.title} />
      <figcaption>
        <dl>
          <dt>{item.title}</dt>
          <dd>{item.content}</dd>
          <dd>{item.calorie}</dd>
          <dd>{item.createdAt}</dd>
        </dl>
      </figcaption>
    </figure>
  </li>
)
}


function List({items}){
  return (
    <ul>
      {items.map( item =>( <ListItem item={item} key={item.id} />))}
    </ul>
  );
}
export default List;