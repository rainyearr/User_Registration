import React from "react";
import { useForm } from "react-hook-form";
import "./UserForm.css"

export const UserForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: 
    { fullname: todo ? todo.fullname : "", 
      username: todo ? todo.username : "",
      email: todo ? todo.email : "",
      address: todo ? todo.address : "",
      phonenumber: todo ? todo.phonenumber : "",
      gender: todo ? todo.gender : "",
     
  }
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="fullname">Full Name:</label>
        <input
          placeholder = "Enter Full Name"
          className="form-control"
          {...register("fullname") }
          type="fullname"
          name="fullname"
          id="fullname"
        />
      </div>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          placeholder = "Enter Username"
          className="form-control"
          {...register("username") }
          type="username"
          name="username"
          id="username"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          placeholder = "Enter Email"
          className="form-control"
          {...register("email") }
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          placeholder = "Enter Address"
          className="form-control"
          {...register("address") }
          type="address"
          name="address"
          id="address"
        />
      </div>
      <div className="form-group">
        <label htmlFor="phonenumber">Phone Number:</label>
        <input
          placeholder = "Enter Phone Number"
          className="form-control"
          {...register("phonenumber") }
          type="phonenumber"
          name="phonenumber"
          id="phonenumber"
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
          <select className="selectinput">
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
      </div>
      <br></br>
      <div className="form-group">
        <button type="submit" className="btn btn-primary createuser-btn">
          Save Todo
        </button>
      </div>
    </form>
  );
};