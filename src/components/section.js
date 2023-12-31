import { Link } from "react-router-dom";
 
export const Section = ({ title, children, url }) => {
  return (
    <div className="section mb-4">
      <div className="title-row mb-4">
        <h2>{title}</h2>
        <Link style={{color:"black", padding:"10px"}} to={url}>
          Edit
        </Link>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};
 
export const SectionRow = ({ children }) => {
  return <div className="section-row">{children}</div>;
};