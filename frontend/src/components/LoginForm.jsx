import { useReducer,useEffect } from "react";
import FormContainer from "./FormContainer";
import {Row,Col,Form,Button} from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useLoginMutation } from "../state/userApiSlice";
import { setCredentials } from "../state/authSlice";
import { toast } from 'react-toastify';

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
    const [stateLocal, dispatchLocal] = useReducer(formReducer, initialFormState);
    const navigate = useNavigate();
    const dispatchGlobal = useDispatch();

    const [login,utl] = useLoginMutation();

    const {userInfo} = useSelector((state) => state.auth);

    // If User is Logged in then redirect to Home Page
    useEffect(() => {
        if(userInfo){
            navigate("/");
        }
    },[navigate,userInfo]);

    const handleFieldChange = (field, value) => {
        dispatchLocal({ type: 'CHANGE', field, value });
    };

    const handleFormReset = () => {
        dispatchLocal({ type: 'RESET', initialState: initialFormState });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const {email,password} = stateLocal;
        try {
            const res = await login({email,password}).unwrap();
            dispatchGlobal(setCredentials({...res.data}));
            toast.success(res.message);
            navigate("/");
        } catch (error) {
            toast.error(error.message);
        }

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
                    value={stateLocal.email}
                    onChange={(e) => handleFieldChange("email",e.target.value)}
                    controlId="email"
                ></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={stateLocal.password}
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