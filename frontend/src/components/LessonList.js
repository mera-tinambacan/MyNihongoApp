import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Form, Dropdown } from 'react-bootstrap';

const LessonList = () => {
    const [lessons, setLessons] = useState([]);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        getAllLessons();
    }, []);

    const getAllLessons = async () => {
        let result = await fetch('https://my-nihongo-app-server.vercel.app/lessons/allLessons')
        result = await result.json();
        setLessons(result);
    }

    const searchHandle = async (event) => {
        let key = event.target.value;
        if (key) {
            let result = await fetch(`https://my-nihongo-app-server.vercel.app/lessons/search/${key}`);
            result = await result.json()
            if (result) {
                setLessons(result)
            }
        } else {
            getAllLessons();
        }
    }

    const handleFilterChange = (selectedFilter) => {
        if (selectedFilter === 'clear') {
            setFilter('');
        } else {
            setFilter(selectedFilter);
        }
    }

    const filteredLessons = filter ? lessons.filter(lesson => lesson.vform === filter) : lessons;

    return (
        <Row className='mx-5'>
            <Col>
                <Form className="d-flex col-4">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        className='me-2 mb-2'
                        onChange={searchHandle}
                    />
                    <Dropdown className="mb-2">
                    <Dropdown.Toggle className="custom-filter-button" id="dropdown-basic">
                            Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleFilterChange("clear")} style={{ color: '#6c757d' }}>Clear</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("NOUN")}>Noun</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("いーADJ")}>いーADJ</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("なーADJ")}>なーADJ</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("V[ます]")}>V[ます]</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("V[て]")}>V [て]</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("V[ない]")}>V [ない]</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("V[Dict]")}>V [Dict]</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("V[た]")}>V [た]</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("V[Plain]")}>V [Plain]</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("V[Potential]")}>V [Potential]</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("V[Cond]")}>V [Cond]</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleFilterChange("V[Vol]")}>V [Vol]</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
                <Table striped bordered hover size="sm" className="lesson-table">
                    <thead className="table-secondary">
                        <tr>
                            <th className="table-header">Level</th>
                            <th className="table-header">Form</th>
                            <th className="table-header">Phrase</th>
                            <th className="table-header">Meaning</th>
                            <th className="table-header">Example</th>
                            <th className="table-header">Translation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredLessons.map((item, index) =>
                                <tr key={index} >
                                    <td style={{ width: '4%', textAlign: 'center' }}>{item.level}</td>
                                    <td style={{ width: '6%' }}>{item.vform}</td>
                                    <td style={{ width: '20%' }}>{item.phrases}</td>
                                    <td style={{ width: '28%' }}>{item.meaning}</td>
                                    <td style={{ width: '21%' }}>{item.example}</td>
                                    <td style={{ width: '21%' }}>{item.translation}</td>
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
