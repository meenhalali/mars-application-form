import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useAppState } from "../state";
import {Field} from "./Field";
 
const linkStyle = {
  textDecoration: "none",
  color: 'rgb(190 242 100)',
  float: "left"
};

export const Health = () => {
  const [state, setState] = useAppState();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ defaultValues: state, mode: "onSubmit" });
  const navigate = useNavigate();
 
  const saveData = (data) => {
    setState({ ...state, ...data });
    navigate("/confirm");
  };
 
  return (
    <form  onSubmit={handleSubmit(saveData)}>
      <fieldset >
        <legend>Health and Safety (3/3)</legend>
        <p> I confirm that I have not had any of the following in the last two weeks:<b> a fever, a persistent cough, 
          difficulty breathing, loss of taste, loss of smell, or diarrhea. </b>
          If I develop these symptoms within two weeks of my departure date I will let the Mars visit program know. </p>

        <Field label="Health Declaration " error={errors?.healthDec}>
          <select style={{width: "220px"}}
            {...register("healthDec", { required: "Health Declaration is required" })}
              id="health-decleration">
            <option value="" selected disabled >Select...</option>
            <option value="Yes" >Yes</option>
            <option value="No" >No</option>
          </select>
        </Field>
        
        <Field label="Emergency Contact Name" error={errors?.emergencycontname}>

          <input {...register("emergencycontname" , {required: "Emergency contact is required" })}
            id="emergency-contact-name"
          />

        </Field>

        <Field label="Emergency Contact Number" error={errors?.emergencycontnum}>

          <input {...register("emergencycontnum" , {
            required: "Emergency contact number is required", 
            pattern:{
             value: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
             message: "Please enter a number in the format xxx-xxx-xxxx"
            }})}   
            id="emergency-contact-number"
          />

        </Field>

        <Field label="Medical Conditions " error={errors?.medcond}>
          <input {...register("medcond", {})}
            id="medical-conditions" 
          />
        </Field>
        <div style={{width: "100%"}}>
          <Link  to="/travelpreferences" style={linkStyle}>
                {"<"} Previous
          </Link>
          <button > Next {">"}</button>
          </div>
      </fieldset>


    </form>
  );
};
