import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Button, Form, Input } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsReducer";
function Register() {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const onFinish = async (values) => {
    //console.log("Recieved values",values);
    try {
      dispatch(showLoading())
      const response = await axios.post("/api/user/register", values);
      dispatch(hideLoading())
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to login page");
        navigate("/login");
      } else {
        toast.error(response.data.message);
        // Check if there's an error message in the response data
        // const errorMessage = response.data.error
        //   ? response.data.error.message
        //   : "Something went wrong";
        // toast.error(errorMessage);
      }

    } catch (error) {
      dispatch(hideLoading());
      //console.log(error.response);
      toast.error("something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-from">
        <h1 className="card-title">Register here</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <Button className="primary-button" htmlType="submit">
            Register
          </Button>
          <Link to="/login" className="anchor m-2">
            Click here to Login
          </Link>
        </Form>
      </div>
    </div>
  );
}
export default Register;
