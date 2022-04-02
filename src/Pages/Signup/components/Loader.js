import React from "react";
import ClipLoader from "react-spinners/BeatLoader";
import PropTypes from 'prop-types';

const Loader = ({ bool }) => {
    return (
        <div className="sweet-loading" style={{ marginTop: '1px' }}>
            <ClipLoader size={5} color={"white"} loading={bool} />
        </div>
    )
}
Loader.propTypes = {
    isLoading: PropTypes.bool
}
export default Loader