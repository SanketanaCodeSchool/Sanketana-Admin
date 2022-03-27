import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import db from "C:/Users/User/Desktop/Sanketana-react-admin/src/firebase-config"
import { addDoc, collection, getDocs } from "firebase/firestore";


const New = ({ inputs, title }) => {
  const [studentName, setNewStudentName] = useState("");
  const [parentName, setNewParentName] = useState("");
  const [email, setNewEmail] = useState("");
  const [grade, setNewGrade] = useState("");
  const [slot, setNewSlot] = useState("");
  const [status, setNewStatus] = useState("");
  const [teacher, setNewTeacher] = useState("");
  


  const usersCollectionRef = collection(db, "students")
  const createUser = async () =>
  { 
      console.log(studentName);
      
      if(studentName !== "")
      {
        await addDoc(usersCollectionRef , 
        {
            student_name : studentName,
            cust_id : "SANK_2901",
            email : email,
            grade : grade,
            parent_name : parentName,
            slot : slot,
            status : status,
            teacher : teacher,
        });
        alert("Student created!")
      }

      
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://i.ibb.co/xfnRVRC/Sanketana-Logo.png"
              alt=""
            />
          </div>
          <div className="right">
            <div className = "myForm">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
         
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput"> 
              </div>

              <div className="formInput">
                <label>Student Name</label>
                <input type="Text" placeholder = "Eshaan Gupta" 
                onChange = { (event) => {
                  setNewStudentName(event.target.value)
                 }} />
              </div>

              <div className="formInput">
                <label>Parent Name</label>
                <input 
                  type="Text"
                  placeholder = "Parent Name" 
                  onChange = { (event) => {
                  setNewParentName(event.target.value)
                 }}
                />
              </div>

              <div className="formInput">
                <label>Email</label>
                <input 
                  type="email" 
                  placeholder = "sanketana@gmail.com" 
                  onChange = { (event) => {
                    setNewEmail(event.target.value)
                   }}
                />
              </div>

              <div className="formInput">
                <label>Grade</label>
                <input type="number" placeholder = "1,2,3..." 
                onChange = { (event) => {
                  setNewGrade(event.target.value)
                 }}
                 />
              </div>

              <div className="formInput">
                <label>Slot</label>
                <input type="Text" placeholder = "Mon Tue Wed"
                onChange = { (event) => {
                  setNewSlot(event.target.value)
                 }}
                  />
              </div>

              <div className="formInput">
                <label>Teacher</label>
                <input type="Text" placeholder = "Abhinav Bhardwaj"
                onChange = { (event) => {
                  setNewTeacher(event.target.value)
                 }}
                 
                 />
              </div>

              <div className="formInput">
                <label>Status</label>
                <input type="Text" placeholder = "Approved"
                onChange = { (event) => {
                  setNewStatus(event.target.value)
                 }}
                 
                 />
              </div>
              
    
              

              <button onClick = {createUser}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;