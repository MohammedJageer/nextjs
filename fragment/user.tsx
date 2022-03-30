import type { NextApiRequest, NextApiResponse } from 'next'
import React, { useEffect, useState } from 'react';
import Card from '../components/card'
import UserList from '../components/userlist';
import Userservice from '../pages/api/userlistservice'
import { ListGroup } from 'reactstrap';

function User() {

    // Hooks
    const [resItem, setResItem] = useState([]);
    const [userDetail, setUserDetail] = useState(false);
    const [userClass, setUserClass] = useState("");
    const [userDetailClass, setUserDetailClass] = useState("d-none");
    const [userDetailRes, setUserDetailRes] = useState({ userId: "", id: "", title: "", body: "" });

    /*
     * This component is used to fetch the user card details
     */
    const userData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
        const data = await response.json();
        setResItem(data);
    };

    // Hooks Invoke
    useEffect(() => {
        userData();
    }, []);

    return (
        <>
            <div className={"user-list" + userClass}>
            <ListGroup>
                {
                    resItem.map((item, index) => {
                        return (
                            <UserList key={item.id} id={item.id} title={item.title} body={item.body} ></UserList>
                        );
                    })
                }
                </ListGroup>
            </div>
            <div className={userDetailClass}>
                <Card id={userDetailRes.id} title={userDetailRes.title} userId={userDetailRes.userId} body={userDetailRes.body}></Card>
            </div>
        </>
    );

}

export default User;