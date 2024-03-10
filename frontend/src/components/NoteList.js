import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Form } from 'react-bootstrap';

const NoteList = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getAllNotes();
    }, []);

    const getAllNotes = async () => {
        let result = await fetch('http://localhost:4000/notes/allNotes')
        result = await result.json();
        setNotes(result);
    }

    console.warn(notes)

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4000/notes/search/${key}`);
            result = await result.json()
            if (result) {
                setNotes(result)
            }
        } else {
            getAllNotes();
        }
    }

    return (
        <Row className='mx-5'>
            <Col>
                <Form className="d-flex mb-2 col-3">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={searchHandle}
                    />
                </Form>
                <Table striped bordered hover size="sm" className="lesson-table">
                    <thead className="table-secondary">
                        <tr>
                            <th>Note</th>
                            <th>Example</th>
                            <th>Translation</th>
                            <th>Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notes.map((item, index) =>
                                <tr key={index} >
                                    <td>{item.note}</td>
                                    <td>{item.example}</td>
                                    <td>{item.translation}</td>
                                    <td>{item.remark}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}
export default NoteList;
