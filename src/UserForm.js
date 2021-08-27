import React from "react";
import { useForm } from "react-hook-form";
import "./UserForm.css"

export const UserForm = ({ todo, onSubmit }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: todo ? todo.text : "", description: todo ? todo.description : ""
  }
  });

  const submitHandler = handleSubmit((data) => {
    onSubmit(data)
  });

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="text">Full Name:</label>
        <input
          placeholder = "Enter Username"
          className="form-control"
          {...register("text") }
          type="text"
          name="text"
          id="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Username:</label>
        <input
          placeholder = "Enter Description"
          className="form-control"
          {...register("description") }
          type="description"
          name="description"
          id="description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Email:</label>
        <input
          placeholder = "Enter Email"
          className="form-control"
          {...register("text") }
          type="text"
          name="text"
          id="text"
        />
      </div>
      <div className="form-group">
        <label htmlFor="text">Phone Number:</label>
        <input
          placeholder = "Enter Phone Number"
          className="form-control"
          {...register("text") }
          type="text"
          name="text"
          id="text"
        />
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