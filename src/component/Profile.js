import React from "react";
import { withAuth0  } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card'
import { Component } from "react";
import axios from 'axios';

import ToReadList from './ToReadList';

const SERVER_URL=process.env.REACT_APP_SERVER;

export class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            toReadBooks:[],
            email:this.props.auth0.user.email,
            flag:true
        }
    }
    getToReadList = async (e) => {
        e.preventDefault();
        await axios.get(`${SERVER_URL}/user?email=${this.state.email}`).then(response => {
            console.log(response.data[0].booksAdded)
            this.setState({
                toReadBooks: response.data[0].booksAdded,
                flag: false
            })
        }).catch(error => console.log(error))
    }

    render() {
        const { user, isAuthenticated } = this.props.auth0;

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
                    <h2>
                        Your BOOKSHELF
                    </h2>
                    <ToReadList 
                    toReadBooks={this.state.toReadBooks}
                    />
                </div>
            )
        )
    }
}

export default withAuth0(Profile);


// const Profile = () => {
//     const { user, isAuthenticated, isLoading } = useAuth0();

//     if (isLoading) {
//         return <div>Loading ...</div>;
//     }

//     return (
//         isAuthenticated && (
//             <div>
//                 <Card style={{ width: '18rem', height: '500px' }}>
//                     <Card.Body>
//                         <Card.Img variant="top" src={user.picture} alt={user.name} />
//                         <br />
//                         <Card.Title>{user.name}</Card.Title>
//                         <Card.Text>
//                             {user.email}
//                         </Card.Text>

//                     </Card.Body>
//                 </Card>
//                 <h2>
//                     Your BOOKSHELF
//                 </h2>
//             </div>
//         )
//     );
// };

// export default Profile;
