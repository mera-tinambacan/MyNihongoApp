import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


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
                <div className="d-flex align-items-center">
                    <Form className="d-flex col-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            className='me-2 mb-2'
                            onChange={searchHandle}
                        />
                    </Form>
                    <Button as={Link} to='/CreateNote' className="custom-add-note-button mb-2 me-2">
                        Add New Note
                    </Button>
                </div>
                <Table striped bordered hover size="sm" className="lesson-table">
                    <thead className="table-secondary">
                        <tr>
                            <th  className="table-header">Note</th>
                            <th  className="table-header">Example</th>
                            <th  className="table-header">Translation</th>
                            <th  className="table-header">Remarks</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notes.map((item, index) =>
                                <tr key={index} >
                                    <td style={{ width: '30%' }}>{item.note}</td>
                                    <td style={{ width: '30%' }}>{item.example}</td>
                                    <td style={{ width: '30%' }}>{item.translation}</td>
                                    <td style={{ width: '10%' }}>{item.remark}</td>
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
