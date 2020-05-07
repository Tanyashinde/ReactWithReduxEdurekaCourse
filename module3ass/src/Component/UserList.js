import React from 'react';
import { Link } from 'react-router-dom';

const UserList = (props) => {

    const renderList = ({ datalist }) => {
        if (datalist) {
            return datalist.map((item) => {
                return (
                    <div>
                        <label>User Name:</label>&nbsp;{item.name}<br />
                        <label>User Contact:</label>&nbsp;{item.phone}<br />
                        <label>User phone :</label>&nbsp;{item.email}<br/>
                        <label>User subject:</label>&nbsp;{item.subject}<br/>
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

export default UserList;