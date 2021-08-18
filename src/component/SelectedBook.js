import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';



class SelectedBook extends React.Component {

    imageClick = () => {
        console.log('Click!!!!');
        this.props.show();

        this.props.select(this.props.title, this.props.description, this.props.image, this.props.author);
    }
    render() {
        console.log(this.props.description);
        return (
            <div>
                <Modal show={this.props.showState} onHide={this.props.showState}>
                    <Card style={{ width: '20rem' }}>
                        <Card.Img style={{ width: '20rem' }} variant="top" src={this.props.image} onClick={this.imageClick} onClick={this.props.show} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>
                            description:  {this.props.description}
                            </Card.Text>
                            <Card.Text>
                            <h1> Author : </h1>   {this.props.author}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.close}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        );
    }


}

export default SelectedBook;