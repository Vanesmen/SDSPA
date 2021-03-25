import { connect } from "react-redux";
import SearchComponent from "./SearchComponent";
import {getVideosData} from "../../redux/search-reducer";
import { compose } from 'redux';
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
      requestText: state.searchPage.requestText,
      videoList: state.searchPage.videoList,
      totalResults: state.searchPage.totalResults,
    }
}


const SearchContainer = compose(
  connect(mapStateToProps, {getVideosData}),
  withAuthRedirect
)(SearchComponent);

export default SearchContainer