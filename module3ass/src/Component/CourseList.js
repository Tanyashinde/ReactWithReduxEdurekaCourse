import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = (props) => {

    const renderList = ({ datalist }) => {
        if (datalist) {
            return datalist.map((item) => {
                return (
                    <div>
                        <label>Course Name:</label>&nbsp;{item.title}<br />
                        <label>Course Author:</label>&nbsp;{item.author}<br />
                        <label>Course description :</label>&nbsp;{item.description}<br/>
                        <Link to="/EnquiryForm"><button type="button" class="btn btn-primary">Enquire</button></Link>
                        <hr />
                    </div>
                )
            })
        }
    }

    return (
        <div>
            {renderList(props)}
        </div>
    )
}

export default CourseList;