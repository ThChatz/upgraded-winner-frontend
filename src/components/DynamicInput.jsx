import React from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
class DynamicInput extends React.Component {
    state = {
        quals: [{ name: "" }]
    }

    handleChange = (e) => {
        if (["name"].includes(e.target.className)) {
            let qualifications = [...this.state.quals]
            qualifications[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
            this.setState({ quals: qualifications }, () => console.log(this.state.quals))
        } else {
            this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
    }

    addQualification = (e) => {
        this.setState((prevState) => ({
            quals: [...prevState.quals, { name: "" }],
        }));
    }

    handleSubmit = (e) => { e.preventDefault() }
    render() {
        let { quals: qualifications } = this.state
        return (
            <>
                <Button onClick={this.addQualification}>Add Qualification</Button>
                {
                    qualifications.map((val, idx) => {
                        let qualId = `qualification-${idx}`
                        return (
                            <div key={idx}>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label htmlFor={qualId}>{`Qualification #${idx + 1}`}</Form.Label>
                                    <Form.Control type="text"
                                        name={qualId}
                                        data-id={idx}
                                        id={qualId}
                                        value={qualifications[idx].name}
                                        className="name" />
                                </Form.Group>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
export default DynamicInput;