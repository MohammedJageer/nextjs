import * as React from 'react'
import Link from 'next/link'

import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
/*
 * This component is used to show the user's list
 * @param {string} id - unique id.
 * @param {string} title - Title.
 * @param {string} body - Description.
 */
const UserList = ({ id, title, body}) => {
    return (
        
            <Link href="/user/[id]" as={`/user/${id}`} passHref>
                <ListGroupItem className="d-flex justify-content-start">
                    <svg className="align-self-center bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
                    <div className="list-item">
                    <ListGroupItemHeading>{title}</ListGroupItemHeading>
                    <ListGroupItemText>
                        {body}
                    </ListGroupItemText>
                    </div>
                </ListGroupItem>
            </Link>
        
    );

}

export default UserList;