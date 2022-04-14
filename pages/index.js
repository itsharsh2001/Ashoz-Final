// import classes from '../styles/globals.css'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useRef,useState} from 'react'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export default function HomePage() {
  const [value, setValue] = useState("Category")
  const changeHandler = (e) => {
    setValue(e.target.innerText);
    console.log(e.target.innerText);
  }
  return (
    <main>
    <span>
      <h5> businessName</h5>
      <br/>
      <br/>
      <br/>
      <h4>
        <span>Category :- </span>
        <span style={{outline:'none', border:'none'}} contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler} >
          {value}
          
        </span>
        <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />
      </h4>
      <h4>
        <span>Business Name :- </span>
        <span>
          {value}
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Owner Name :- </span>
        <span>
           ownerName
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Mobile Number :- </span>
        <span>
           mobileNumber
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Contact Person :- </span>
        <span>
           contactPerson
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      {/* <h4>
        <span>Image :- </span>
        <span>
          <img
            style={{ marginBottom: "-5px" }}
            style={{ borderRadius: "10px" }}
            height="80%"
            width="60%"
            src={ ownerImage}
            alt="Image"
          />
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4> */}
      <h4>
        <span>Area :- </span>
        <span>
          area
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Location :- </span>
        <span>
           location
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Street :- </span>
        <span>
           street
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Landmark :- </span>
        <span>
           landmark
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Business Address :- </span>
        <span>
           businessAddress
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Business Email :- </span>
        <span>
           businessEmail
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Business Information :- </span>
        <span>
           businessInformation
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Interested :- </span>
        <span>
          intrestedString
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Year Of Established :- </span>
        <span>
           yearOfEstablished
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Website :- </span>
        <span>
          websiteDataInString
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Youtube :- </span>
        <span>
          youtubeDataInString
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Instagram :- </span>
        <span>
          instagramDataInString
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Facebook :- </span>
        <span>
          facebookDataInString
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Date :- </span>
        <span>
           date
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Monday Working:- </span>
        <span>
          monday
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Tuesday Working :- </span>
        <span>
          tuesday
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Wednesday Working :- </span>
        <span>
          wednesday
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Thursday Working :- </span>
        <span>
          thursday
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Friday Working :- </span>
        <span>
          friday
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Saturday Working :- </span>
        <span>
          saturday
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Sunday Working :- </span>
        <span>
          sunday
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>MondayToSaturday Working :- </span>
        <span>
          mondaytosaturday
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Cash Payment :- </span>
        <span>
          cash
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Debit/Credit Card Payment :- </span>
        <span>
          debitcredit
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>UPI Payment :- </span>
        <span>
          upi
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>GST Certification :- </span>
        <span>
          gst
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      
        <h4>
          <span>Other Certification :- </span>
          <span>
            other
            <EditIcon
              style={{
                position: "relative",
                top: "5px",
                left: "8px",
                fontSize: "20px",
                color: "var(--dashboard-brown)",
              }}
            />{" "}
          </span>
        </h4>
      

     
      <h4>
      <span>Request For Correction :- </span>
        <span>
          requestCorrection
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
        </h4>
        
      <h4>
        <span>Agent Name :- </span>
        <span>
          agentname
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
      <h4>
        <span>Agent ID :- </span>
        <span>
          agentid
          <EditIcon
            style={{
              position: "relative",
              top: "5px",
              left: "8px",
              fontSize: "20px",
              color: "var(--dashboard-brown)",
            }}
          />{" "}
        </span>
      </h4>
    </span>
    <span>
      <h3>Feedback</h3>
      <p> feedback</p>
    </span>
  </main>
  )
}
