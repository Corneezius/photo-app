import Main from "./main";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {removePost} from "../redux/actions";
import *as actions from "../redux/actions"
import {withRouter} from "react-router";

function mapStateToProps(state) {
  return {
    posts:state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))

export default App;
