import React from "react";
import { useParams } from 'react-router-dom';

class Detail extends React.Component {
    componentDidMount() {

    }
    render() {
        console.log(this.props.location);
        return <span>hello</span>;
    }
}
export default Detail;
