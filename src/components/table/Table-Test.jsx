import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import db from "../../firebase-config"
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc
} from "firebase/firestore";
import { useState, useEffect } from "react";



const List = () => {


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://firestore.googleapis.com/v1/projects/test-ad72c/databases/(default)/documents/students")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      console.log("loading");//return <div>Loading...</div>;
    } else {
        items.map(item => ( console.log({item})));
            //<li key={item.id}>
                 //</li>
        

      /*return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );*/
    }
  

  const [users, setUsers] = useState([]);

  // reference to my students collection
  const usersCollectionRef = collection(db, "students")


  //useEffect hook is called when there is a change on  the o
  useEffect ( () => 
  {
      const getUsers = async () => 
      {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
          //console.log(data.docs);
      }
      getUsers();

      
  }, []   

  );

  
    console.log(users) ;

  const rows = [
    {
      cust_id: "SANK_2901",
      student_name: "Jayant",
      parent_name: "Babita",
      email: "jayant@gmail.com",
      grade: 6,
      slot: "Tue/Thu 6-7",
      teacher: "Abhinav",
      status: "Approved",
    },
    {
      cust_id: "SANK_8924",
      student_name: "Aryan",
      parent_name: "Preeti",
      email: "aryan@gmail.com",
      grade: 9,
      slot: "Tue/Thu 6-7",
      teacher: "Abhinav",
      status: "Pending",
    },
    {
      cust_id: "SANK_9371",
      student_name: "student",
      parent_name: "Saranya",
      email: "saranya@gmail.com",
      grade: 6,
      slot: "TBD",
      teacher: "Shweta",
      status: "Approved",
    },
    {
      cust_id: "SANK_1171",
      student_name: "Advik",
      parent_name: "Kishore",
      email: "advij@gmail.com",
      grade: 3,
      slot: "Tue/Thu 6-7",
      teacher: "Shweta",
      status: "Approved",
    },
    {
      cust_id: "SANK_9182",
      student_name: "Rishabh",
      parent_name: "Ramya",
      email: "rishabh@gmail.com",
      grade: 3,
      slot: "Tue/Thu 6-7",
      teacher: "Abhinav",
      status: "Approved",
    },

    

  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Student ID</TableCell>
            <TableCell className="tableCell">Student Name</TableCell>
            <TableCell className="tableCell">Parent Name</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Grade</TableCell>
            <TableCell className="tableCell">Slot</TableCell>
            <TableCell className="tableCell">Teacher</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row.cust_id}>
              <TableCell className="tableCell">{row.cust_id}</TableCell>
              <TableCell className="tableCell">{row.student_name}</TableCell>
              <TableCell className="tableCell">{row.parent_name}</TableCell>           
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.grade}</TableCell>
              <TableCell className="tableCell">{row.slot}</TableCell>
              <TableCell className="tableCell">{row.teacher}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
