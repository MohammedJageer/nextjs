import * as React from 'react'
import { useRouter } from 'next/router'
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText
} from 'reactstrap';

/*
 * This component is used to create user card details
 * @param {string} id - unique id.
 * @param {string} userId - User's id.
 * @param {string} title - Title.
 * @param {string} body - Description.
 */
const UserDetail = ({ id, userId, title, body }) => {
    const router = useRouter();
    return (

        <div>
            <Card>
                <CardHeader className="primary">User Details</CardHeader>
                <CardBody>
                    <CardTitle>{ title }</CardTitle>
                    <CardText>ID : { id }</CardText>
                    <CardText>User ID : { userId }</CardText>
                    <CardText>{ body }</CardText>
                    <a href="#" className="btn btn-primary" onClick={() =>router.back()}>Go Back</a>
                </CardBody>
            </Card>
        </div>
    );

}

export default UserDetail;