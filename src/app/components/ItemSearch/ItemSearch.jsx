

const ItemSearch = (props) => {
  return (
    <div className="row px-4">
      <img src={props.img} className="col-lg-2" />
      <div className="col-lg-8">
        <h5>{props.title}</h5>
      </div>
      <button className="btn btn-primary col-lg-2">Add to list</button>
    </div>
  )
}

export default ItemSearch