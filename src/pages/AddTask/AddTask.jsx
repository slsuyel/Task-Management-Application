import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { baseUrl } from '../../baseUrl/baseUrl';
import Swal from 'sweetalert2';

const AddTask = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const task = {
            title: title,
            description: description,
            status: status
        };

        fetch(`${baseUrl}/alltasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    setTitle('');
                    setDescription('');
                    setStatus('');
                    Swal.fire(
                        'Good job!',
                        'You added the task successfully!',
                        'success'
                    )
                }
            })

    };

    return (
        <Container className='align-items-center d-flex mx-auto row'>
            <div className='col-md-6'>
                <img src='https://cdn.dribbble.com/users/4241563/screenshots/11874468/media/7796309c77cf752615a3f9062e6a3b3d.gif' alt="" className='w-100' />
            </div>
            <Form onSubmit={handleSubmit} className='col-md-6'>
                <Form.Group controlId="title">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="custom-input"
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        className="custom-textarea"
                    />
                </Form.Group>

                <Form.Group controlId="status">
                    <Form.Label>Status:</Form.Label>
                    <Form.Control
                        as="select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                        className="custom-select"
                    >
                        <option value="" disabled>Select status </option>
                        <option value="inProgress">In Progress</option>
                        <option value="completed">Completed</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" className='mt-4' type="submit">
                    Add Task
                </Button>
            </Form>
        </Container>
    );
};

export default AddTask;
