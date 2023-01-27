import './List.css';
function date(i){
  const foodDate = new Date(i);
  return `${foodDate.getFullYear()} .${foodDate.getMonth() + 1}.${foodDate.getDate()}`
}
function ListItem({item,onDelete}){
  const {imgUrl,title,content,calorie,createdAt} = item;
return (
  // <li>
  //   <figure>
  //     <img src={item.imgUrl} alt={item.title} />
  //     <figcaption>
  //       <dl>
  //         <dt>{item.title}</dt>
  //         <dd>{item.content}</dd>
  //         <dd>{item.calorie}</dd>
  //         <dd>{item.createdAt}</dd>
  //       </dl>
  //     </figcaption>
  //   </figure>
  // </li>
  <li>
  <figure>
    <img src={imgUrl} alt={title} />
    <figcaption>
      <dl>
        <dt>{title}</dt>
        <dd>{content}</dd>
        <dd>{calorie}</dd>
        <dd>{date(createdAt)}</dd>
        <dd>
          <button 
            type='button'
            onClick={() => {return onDelete(item.id)}}>delete</button>
        </dd>
      </dl>
    </figcaption>
  </figure>
</li>
)
}


function List({items,onDelete}){
  return (
    <ul>
      {items.map( item =>( <ListItem item={item} key={item.id} onDelete={onDelete} />))}
    </ul>
  );
}
export default List;