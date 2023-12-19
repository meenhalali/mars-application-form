import { useForm } from "react-hook-form";
import { useAppState } from "../state";
import { Section, SectionRow } from "./section";
import { useNavigate } from "react-router-dom";

 
export const ConfirmData = () => {
  const [state] = useAppState();
  const { handleSubmit } = useForm({ defaultValues: state });

  const navigate = useNavigate();

  const submitData = (data) => {
    
    /*Checking if first stage is completed by checking if first name is defined. You shouldn't be able to get past first stage
    if first name is undefined. Also the first stage won't let you continue to next stage if the other required fields are incomplete.
    I could check for every field but unless the person is intentionally trying to break the form they shouldn't be able to get to confirm page.
    In a production environment I would check every field.
    */
    if (typeof(state.firstName) == 'undefined' || state.firstName == null){
      alert("Please fill out the personal info page correctly using the edit button.");
    }
    //Similar logic as above for stage 2. Deperture date has to be defined and stage 2 page will check the other required fields when on the page.
    else if (typeof(state.depdate) == 'undefined' || state.depdate == null){
      alert("Please fill out the travel preferences page correctly using the edit button.");
    }
    //Similar logic as above for stage 3. Health decleration has to be defined and stage 2 page will check the other required fields when on the page.
    else if (typeof(state.healthDec) == 'undefined' || state.healthDec == null){
      alert("Please fill out the Health and Safety page correctly using the edit button.");
    }
    else{
      //Submit data to server since all stages are filled with required information
      console.info(data);
      navigate("/success");
    }
  };
 
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <h1 className="mb-4">Review and Submit Information</h1>
      <Section title="Personal info" url="/">
        <SectionRow>
          <div><b>First name</b></div>
          <div>{state.firstName}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Last name</b></div>
          <div>{state.lastName}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Date of Birth</b></div>
          <div>{state.dob}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Nationality</b></div>
          <div>{state.nationality}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Email</b></div>
          <div>{state.mail}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Phone Number</b></div>
          <div>{state.phone}</div>
        </SectionRow>

      </Section>
      <Section title="Travel Preferences" url="/travelpreferences">
        <SectionRow>
          <div><b>Departure Date</b></div>
          <div>{state.depdate}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Return Date</b></div>
          <div>{state.retdate}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Accomdation</b></div>
          <div>{state.accom}</div>
        </SectionRow>
        <SectionRow>
          <div style={{}}><b>Special Requests/Preferences</b></div>
          <div>{state.requests}</div>
        </SectionRow>
      </Section>
      <Section title="Health and Safety" url="/health">
        <SectionRow>
          <div><b>Health Declaration</b></div>
          <div>{state.healthDec}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Emergency Contact Name </b></div>
          <div>{state.emergencycontname}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Emergency Contact Number</b> </div>
          <div>{state.emergencycontnum}</div>
        </SectionRow>
        <SectionRow>
          <div><b>Medical Conditions</b></div>
          <div>{state.medcond}</div>
        </SectionRow>
      </Section>
      <div className="d-flex justify-content-start">
        <button>Submit</button>
      </div>
    </form>
  );
};