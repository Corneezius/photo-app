import React from "react";
import Photo from "./photo";
import PropTypes from "prop-types"
import {Link} from "react-router-dom"


function Photowall(props) {
    return <div>
      <Link className="add-icon" to= {"/AddPhoto"}> </Link>
          <div className="photo-grid">
          {props.posts
            .sort(function(x,y) {
              return y.id - x.id
            })
            .map((post, index) => <Photo key= {index} post={post} {...props} index={index} />)}
         </div>
      </div>
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Photowall;
