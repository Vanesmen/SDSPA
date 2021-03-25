import { connect } from "react-redux";
import FavoritesForm from "./FavoritesForm";
import {setNewRequest, editRequest} from "../../../redux/favorites-reducer"

let mapStateToProps = (state) => {
    return {
      requestText: state.searchPage.requestText,
    }
}



const FavoritesFormContainer = connect(mapStateToProps, {setNewRequest, editRequest})(FavoritesForm);

export default FavoritesFormContainer