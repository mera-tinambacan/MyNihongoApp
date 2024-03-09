import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Form } from 'react-bootstrap'

const LessonList = () => {
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        getAllLessons();
    }, []);

    const getAllLessons = async () => {
        let result = await fetch('http://localhost:4000/lessons/allLessons')
        result = await result.json();
        setLessons(result);
    }

    console.warn(lessons)


    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`http://localhost:4000/lessons/search/${key}`);
            result = await result.json()
            if (result) {
                setLessons(result)
            }
        } else {
            getAllLessons();
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
                <Table striped bordered hover size="sm">
                    <thead className="table-secondary">
                        <tr>
                            <th>Level</th>
                            <th>Form</th>
                            <th>Phrase</th>
                            <th>Meaning</th>
                            <th>Example</th>
                            <th>Translation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lessons.map((item) =>
                                <tr key={item} >
                                    <td>{item.level}</td>
                                    <td>{item.vform}</td>
                                    <td>{item.phrases}</td>
                                    <td>{item.meaning}</td>
                                    <td>{item.example}</td>
                                    <td>{item.translation}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Col>
        </Row>
    );
}

export default LessonList;