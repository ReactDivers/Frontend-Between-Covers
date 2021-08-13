import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card'

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <Card style={{ width: '18rem', height: '500px' }}>
                    <Card.Body>
                        <Card.Img variant="top" src={user.picture} alt={user.name} />
                        <br />
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>
                            {user.email}
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        )
    );
};

export default Profile;
