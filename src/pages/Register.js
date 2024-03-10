import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import "../Register.css";
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
      //dispatch(showLoading())
      const response = await axios.post("/api/user/register", values);
      //dispatch(hideLoading())
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to login page");
        navigate("/login");
      } else {
        console.log(response.data.message);
        toast.error(response.data.message);
        // Check if there's an error message in the response data
        // const errorMessage = response.data.error
        //   ? response.data.error.message
        //   : "Something went wrong";
        // toast.error(errorMessage);
      }

    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <div>
      <div id="heading">
        <h1>Meet Doctor</h1>
      </div>
      <div className="login-container">
        <h2>Register</h2>
        <Form
          name="register"
          onFinish={onFinish}
          initialValues={{ remember: true }}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: "Please input your username!" },
            ]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {/* <div className="register-link">
          <p>
            Not registered yet? <Link to="/register">Click here</Link>
          </p>
        </div> */}
      </div>
    </div>
  );
}
export default Register;
