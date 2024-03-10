import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { UseSelector,useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { showLoading,hideLoading } from "../redux/alertsReducer";

// function Login() {
//   const dispatch=useDispatch();
//   const navigate = useNavigate();
//   const onFinish = async (values) => {
//     console.log("Recieved values",values);
//     try {
//       dispatch(showLoading())
//       const response = await axios.post("/api/user/login", values);
//       dispatch(hideLoading())
//       if (response.data.success) {
//         toast.success(response.data.message);
//         toast("Redirecting to login page");
//         localStorage.setItem("token",response.data.data);
//         navigate("/");
//       } else {
//         toast.error(response.data.message);
       
//       }
//     } catch (error) {
//       dispatch(hideLoading());
//       //console.log(error.response);
//       toast.error("something went wrong");
//     }
//   };

//   return (
//     <div className="authentication">
//       <div className="authentication-from">
//         <h1 className="card-title">Login here</h1>
//         <Form layout="vertical" onFinish={onFinish}>
//           {/* <Form.Item label="Name" name="name">
//             <Input placeholder="Name" />
//           </Form.Item> */}
//           <Form.Item label="Email" name="email">
//             <Input placeholder="Email" />
//           </Form.Item>
//           <Form.Item label="Password" name="password">
//             <Input placeholder="Password" type="password" />
//           </Form.Item>
//           <Button className="primary-button" htmlType="submit">
//             Login
//           </Button>
//           <Link to="/register" className="anchor m-2">
//             Click here to Register
//           </Link>
//         </Form>
//       </div>
//     </div>
//   );
// }
// export default Login;
//import React from "react";
//import { Link } from "react-router-dom";
import "../Login.css";

function Login() {
  const dispatch = useDispatch();
    const navigate = useNavigate();
    const onFinish = async (values) => {
      console.log("Recieved values",values);
      try {
        dispatch(showLoading())
        const response = await axios.post("/api/user/login", values);
        dispatch(hideLoading())
        if (response.data.success) {
          toast.success(response.data.message);
          toast("Redirecting to login page");
          localStorage.setItem("token",response.data.data);
          navigate("/");
        } else {
          toast.error(response.data.message);

        }
      } catch (error) {
        dispatch(hideLoading());
        //console.log(error.response);
        toast.error("something went wrong");
      }
    };

  return (
    <div>
      <div id="heading">
        <h1>Meet Doctor</h1>
      </div>
      <div className="login-container">
        <h2>Login</h2>
        <form className="login-form">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          <p>
            Not registered yet? <Link to="/register">Click here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
