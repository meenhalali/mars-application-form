import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../state";
import {Field} from "./Field";
 
export const Contact = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();
 
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/travelpreferences");
  };
 
  return (
    <form  onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Personal Information (1/3) </legend>
        <Field label="First Name " error={errors?.firstName}>
          <input
            {...register("firstName", { required: "First name is required" })}
            id="first-name"
          />
        </Field>

        <Field label="Last Name " error={errors?.lastName}>
            <input {...register('lastName', { required: "Last name is required" })} 
            id="last-name"
            /> 
        </Field>

        <Field label="Date of Birth " error={errors?.dob}>
            <input type="date" {...register('dob', {required: "Date of birth is required" })} 
            id="date-of-birth"
            />
        </Field>

        <Field label="Nationality " error={errors?.nationality}>
            <input  {...register('nationality',{
            required: { 
                value: true,
                message: "Nationality is required"},  
            pattern: { 
            value:  (/^[A-Za-z]+$/),
            message: "Nationality should only include letters"} 
            })} 
            id="Nationality-id"
            /> 
        </Field>

        <Field label="Email " error={errors?.mail}>
            <input type="email"
            {...register("mail", { required: "Email Address is required",
            pattern:{
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
            message: "Please enter a valid email address"
            }})}
            id="email" 
            />
        </Field>

        <Field label="Phone Number " error={errors?.phone}>
            <input type="tel"
             {...register('phone', { required: "Phone number is required",
             pattern:{
                value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
                message: "Please enter a number in the format xxx-xxx-xxxx"
             }})} 
             id="phone-number"
             /> 
        </Field>

        <button>Next {">"}</button>
        
      </fieldset>
    </form>
  );
};