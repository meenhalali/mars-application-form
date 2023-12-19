import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import React from 'react';
import {Field} from "./Field";


const linkStyle = {
  textDecoration: "none",
  color: 'rgb(190 242 100)',
  float: "left"
};
 
export const TravelPreferences = () => {
  const [state, setState] = useAppState();
  const [date, setDate] = React.useState({
    depdate: "",
    retdate: "",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();
 
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/health");
  };
  
  //Set the departure/return date for travel to mars 
  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setDate({...date, [name]: value});

  };
 
  return (
    <form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Travel Preferences (2/3)</legend>
        <Field label="Departure Date " error={errors?.depdate}>
          <input type="date"
            {...register("depdate", { required: "Departure Date is required",
          })}
            min= {new Date().toISOString().split("T")[0]}
            onChange= {handleChange}
            id="dep-date"
          />
        </Field>

        <Field label="Return Date " error={errors?.retdate}>
          <input type="date"
            {...register("retdate", { required: "Return Date is required",
          })}
            min= {date.depdate ? new Date(date.depdate).toISOString().split("T")[0]: ""}
            onChange= {handleChange}
            id="ret-date"
          />
        </Field>

        <Field label ="Accomdation Preference " error={errors?.accom}>
            <select style={{width: "220px"}}
            {...register("accom", { required: "Accomdation preference is required",})}
              id="accomdation-preference"
            >
              <option value="Space Hotel">Space Hotel</option>
              <option value="Martian Base">Martian Base</option>
            </select>
        </Field>

        <Field label ="Special Requests or Preferences " error={errors?.requests}>
          <input  type ="text" style={{width: "220px" } }
            {...register("requests", { })}
          />
        </Field>
        <div style={{width: "100%"}}>
          <Link  to="/" style={linkStyle}>
                {"<"} Previous
          </Link>
          <button > Next {">"}</button>
          </div>
      </fieldset>
    </form>
  );
};