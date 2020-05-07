import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = (props) => {

    const renderList = ({ datalist }) => {
        if (datalist) {
            return datalist.map((item) => {
                return (
                    // // <Link to={`/Courses/${item.id}`} key={item.id}>
                    // // <div>
                    // // <label>{item.title}</label>
                    // // </div>
                    // // </Link>
                    <div>
                        <label>User Name:</label>&nbsp;{item.name}<br />
                        <label>User Last Name:</label>&nbsp;{item.lname}<br />
                        <label>Email :</label>&nbsp;{item.email}<br />
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