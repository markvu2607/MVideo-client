import ytbApis from "app/apis/ytbApis/index"
import { useState, useEffect } from "react"
import ItemSearch from "app/components/ItemSearch/ItemSearch";
import { convert_time } from "app/utils";
import { connect } from "react-redux";
import { addVideo } from "app/redux/actions/PlayListActions";


const SearchBox = (props) => {

  const [qSearch, setQSearch] = useState("");
  const [searchList, setSearchList] = useState([])


  const search = async () => {
    const listVideoSearch = await ytbApis.get('/search', {
      params: {
        q: qSearch
      }
    }).then(async ({ data }) => {
      const listVideoSearch = data.items
      for (const index in listVideoSearch) {
        const videoId = listVideoSearch[index].id.videoId
        const video = await getVideoById(videoId)
        const itemNew = {
          id: listVideoSearch[index].id.videoId,
          img: listVideoSearch[index].snippet.thumbnails.default.url,
          title: listVideoSearch[index].snippet.title,
          duration: convert_time(video.contentDetails.duration)
        }
        listVideoSearch[index] = itemNew
      }
      return listVideoSearch
    })
    setSearchList(listVideoSearch)
  }

  const getVideoById = async (id) => {
    const res = await ytbApis.get('/videos', {
      params: {
        id: id,
        part: "contentDetails"
      }
    })
    return res.data.items[0]
  }

  const handleChangeInputSearch = (event) => {
    setQSearch(event.target.value)
  }

  const handleAddVideo = (video) => {
    const playList = props.playList
    if (playList.currentVideoRedux.id != video.id
      && playList.videosRedux.filter((videoRedux) => videoRedux.id == video.id).length == 0) {
      props.addVideo(video)
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
            type="text"
            placeholder="Search..."
            onChange={handleChangeInputSearch}
          />
          <button type="button" onClick={search} >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
        <div className="list-search">
          {searchList.map(
            (item, index) => <ItemSearch
              key={index}
              video={item}
              handleAddVideo={handleAddVideo}
            />
          )}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playList: state.playlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addVideo: (video) => addVideo(video, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)