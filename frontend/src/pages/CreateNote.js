import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function CreateNote() {
    const [note, setNote] = useState("");
    const [example, setExample] = useState("");
    const [translation, setTranslation] = useState("");
    const [remark, setRemark] = useState("");
    const navigateToDashboard = useNavigate();
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (note !== "") {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [note, example, translation, remark]);

    function addNote(event) {
        event.preventDefault();

        fetch('http://localhost:4000/notes/addNote', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                note: note,
                example: example,
                translation: translation,
                remark: remark,
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                if (data === true) {
                    Swal.fire({
                        title: "New Note Created!",
                        icon: "success",
                        text: ""
                    })
                    navigateToDashboard("/notes");
                } else {
                    Swal.fire({
                        title: "Something went wrong!",
                        icon: "error",
                        text: "Please try again"
                    })
                    navigateToDashboard("/notes");
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    title: "Error",
                    icon: "error",
                    text: "An error occurred. Please try again later."
                });
            });
    }

    return (
        <Container>
            <Row>
                <Col className="colForm">
                    <div className=''>
                        <Form onSubmit={addNote} className="p-5" style={{backgroundColor: "#FFF3CF"}}>
                            <Form.Group className="mb-3" controlId="note">
                                <Form.Label>Note</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    value={note}
                                    onChange={event => setNote(event.target.value)}
                                    required 
                                    style={{ height: "100px"}}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="example">
                                <Form.Label>Example</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={example}
                                    onChange={event => setExample(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="translation">
                                <Form.Label>Translation</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={translation}
                                    onChange={event => setTranslation(event.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="remark">
                                <Form.Label>Remarks</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={remark}
                                    onChange={event => setRemark(event.target.value)} />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                disabled={!isActive}
                            >Create New Note
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
