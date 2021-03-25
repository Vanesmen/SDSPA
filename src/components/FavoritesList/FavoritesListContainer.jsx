import { connect } from "react-redux";
import FavoritesListComponent from "./FavoritesListComponent";
import {getVideosData} from "../../redux/search-reducer";
import { compose } from 'redux';
import withAuthRedirect from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
    return {
        requestItems: state.favoritesPage.requestItems
    }
}

const FavoritesListContainer = compose(
    connect(mapStateToProps, {getVideosData}),
    withAuthRedirect
)(FavoritesListComponent);

export default FavoritesListContainer