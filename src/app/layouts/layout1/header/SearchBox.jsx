import { searchByQ } from "app/apis/ytbApis/index"
import { useState, useRef, useEffect } from "react"
import ItemSearch from "app/components/ItemSearch/ItemSearch"
import { addVideo } from "app/redux/actions/PlayListActions"
import { useDispatch, useSelector } from 'react-redux'
import { VideosReduxSelector, CurrentVideoReduxSelector } from '../../../redux/selectors'


const SearchBox = (props) => {

  const [qSearch, setQSearch] = useState("")
  const [searchList, setSearchList] = useState([])

  const inputRef = useRef(null)

  const dispatch = useDispatch()
  const videosReduxSelector = useSelector(VideosReduxSelector)
  const currentVideoReduxSelector = useSelector(CurrentVideoReduxSelector)

  useEffect(() => {
    inputRef.current.focus();
  });


  const handleSearch = async () => {
    setSearchList(null)
    const listVideoSearch = await searchByQ(qSearch)
    setSearchList(listVideoSearch)
  }

  const handleChangeInputSearch = (event) => {
    setQSearch(event.target.value)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }

  const handleAddVideo = (video) => {
    if (currentVideoReduxSelector.id !== video.id
      && videosReduxSelector.filter((videoRedux) => videoRedux.id === video.id).length === 0) {
      dispatch(addVideo(video))
      alert('Thêm thành công')
    }
    else {
      alert('Đang phát video này')
    }
  }

  return (
    <div className="search-box">
      <div
        className="cover-layer"
        onClick={props.onClose}
      >
      </div>

      <div className="search-view">
        <div className="form-search">
          <input
            ref={inputRef}
            type="text"
            value={qSearch}
            placeholder="Search..."
            onChange={handleChangeInputSearch}
            onKeyPress={handleKeyPress}
          />
          <div className="search-icon" onClick={handleSearch}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
        <div className="list-search">
          {searchList ?
            searchList.map(
              (item, index) => <ItemSearch
                key={index}
                video={item}
                handleAddVideo={handleAddVideo}
              />
            ) :
            <div className="h-100 d-flex justify-content-center align-items-center">
              <div className="spinner-border">
                <span className="sr-only"></span>
              </div>
            </div>}
        </div>
      </div>
    </div>
  )
}

export default SearchBox