import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { baseUrl } from "../../baseUrl/baseUrl";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import useAddClass from "../Hooks/useAllTask";

const UpdateTask = () => {

    const { id } = useParams();
    const [allTask] = useAddClass();
    const item = allTask.find((item) => item._id === id);

    const [title, setTitle] = useState(item.title);
    const [description, setDescription] = useState(item.description);
    const [status, setStatus] = useState(item.status);


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${baseUrl}/alltasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                description,
                status,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good!',
                        'Task Update successfully',
                        'success'
                    );
                }



            })
            .catch((error) => {
                // Handle any errors
                console.error(error);
            });
    };
    return (
        <Container className="align-items-center d-flex mx-auto row">
            <div className="col-md-6">
                <img
                    src="https://cdn.dribbble.com/users/4241563/screenshots/11874468/media/7796309c77cf752615a3f9062e6a3b3d.gif"
                    alt=""
                    className="w-100"
                />
            </div>
            <Form onSubmit={handleSubmit} className="col-md-6">
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
                        <option value="" disabled>
                            Select status
                        </option>
                        <option value="inProgress">In Progress</option>
                        <option value="completed">Completed</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" className="mt-4" type="submit">
                    Update Task
                </Button>
            </Form>
        </Container>
    );
};

export default UpdateTask;
