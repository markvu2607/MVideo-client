import store from "app/redux/store";
import { ADD_SONG } from "app/redux/actions/PlayListActions";

const ItemSearch = (props) => {


  const handleAddSong = () => {
    store.dispatch({ type: ADD_SONG })
  }

  return (
    <div className="row px-4 item-search">
      <img
        alt={props.title}
        src={props.img}
        className="col-lg-2 col-mb-2"
      />
      <div className="col-lg-8 col-mb-8 flex-column mt-2">
        <b>{props.title}</b>
        <p>Duration: {props.duration}</p>
      </div>
      <button
        className="btn btn-primary col-lg-2 col-mb-1"
        onClick={handleAddSong}
      >
        Add to list
      </button>
    </div>
  )
}

export default ItemSearch