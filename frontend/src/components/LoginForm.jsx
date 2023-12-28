import { useReducer } from "react";
import FormContainer from "./FormContainer";
import {Row,Col,Form,Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const initialFormState = {email:"",password:""};
const formReducer = (state,action) => {
    switch (action.type) {
        case 'CHANGE':
          return { ...state, [action.field]: action.value };
        case 'RESET':
          return action.initialState;
        default:
          return state;
      }
}

const LoginForm = () => {
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    const handleFieldChange = (field, value) => {
        dispatch({ type: 'CHANGE', field, value });
    };

    const handleFormReset = () => {
        dispatch({ type: 'RESET', initialState: initialFormState });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log('state', state)
        handleFormReset();
    }

  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={state.email}
                    onChange={(e) => handleFieldChange("email",e.target.value)}
                    controlId="email"
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={state.password}
                    onChange={(e) => handleFieldChange("password",e.target.value)}
                    controlId="password"
                ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
                Sign In
            </Button>
            <Row className="mt-3">
                <Col>
                    New Customer? <Link to="/register">Register</Link>
                </Col>
            </Row>
        </Form>
    </FormContainer>
  )
}

export default LoginForm