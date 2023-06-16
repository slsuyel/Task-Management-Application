import { Table, Button, Spinner } from 'react-bootstrap';
import useAllTask from '../Hooks/useAllTask';
import Swal from 'sweetalert2';
import { baseUrl } from '../../baseUrl/baseUrl';
import { Link } from 'react-router-dom';

const TaskList = () => {
    const [allTask, refetch, isLoading] = useAllTask();

    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        );
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${baseUrl}/alltasks/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire('Deleted!', 'Your task has been deleted.', 'success');
                        }
                    });
            }
        });
    };


    const updateStatus = (id, status) => {
        fetch(`${baseUrl}/alltasks/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    Swal.fire(
                        'Good!',
                        `Status is ${status}`,
                        'success'
                    );
                }
            });
    };

    return (
        <div className="container mx-auto w-100">
            <h2 className="text-center">Task List</h2>
            <div className="table-responsive">
                <Table striped bordered hover>
                    <thead>
                        <tr className='text-center'>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTask.map((task) => (
                            <tr key={task._id}>
                                <td>{task.title}</td>
                                <td>{task.description}</td>
                                <td className='text-nowrap'>{task.status}</td>

                                <td className="d-md-flex gap-3 justify-content-center">
                                    <Button onClick={() => { updateStatus(task._id, task.status === 'completed' ? 'In Progress' : "completed") }}


                                        className='text-nowrap mb-1' variant="primary"> Change status </Button>

                                    <Link to={`/taskupdate/${task._id}`}>
                                        <button className="btn-info btn text-nowrap mb-1" >Update task </button>
                                    </Link>

                                    <Button variant="danger" onClick={() => handleDelete(task._id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default TaskList;
