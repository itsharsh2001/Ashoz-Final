import classes from "./ShopKiDetail.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Card from "../../UI/Card";
import t from "typy";
import { CancelSharp } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from 'react'
import DoneIcon from '@mui/icons-material/Done';
import axios from 'axios'
import {useRouter} from 'next/router'

export default function ShopKiDetail({ data }) {

  const router = useRouter();
  const email = data.businessEmail;
  
  const intrestedString = data.interested.toString();
  const requestCorrection = data.requestForCorrection.toString();
  const websiteDataInString = t(
    data,
    "socialSites.website.isWebsite"
  ).safeObject.toString();
  const youtubeDataInString = t(
    data,
    "socialSites.youtube.isYoutube"
  ).safeObject.toString();
  const instagramDataInString = t(
    data,
    "socialSites.instagram.isInsta"
  ).safeObject.toString();
  const facebookDataInString = t(
    data,
    "socialSites.facebook.isFacebook"
  ).safeObject.toString();
  const monday = t(data, "workingHours.monday").safeObject.toString();
  const tuesday = t(data, "workingHours.tuesday").safeObject.toString();
  const wednesday = t(data, "workingHours.wednesday").safeObject.toString();
  const thursday = t(data, "workingHours.thrusday").safeObject.toString();
  const friday = t(data, "workingHours.friday").safeObject.toString();
  const saturday = t(data, "workingHours.saturday").safeObject.toString();
  const sunday = t(data, "workingHours.sunday").safeObject.toString();
  const mondaytosaturday = t(
    data,
    "workingHours.mondayToSaturday"
  ).safeObject.toString();

  const cash = t(data, "paymentMode.cash").safeObject.toString();
  const debitcredit = t(
    data,
    "paymentMode.debitAndCreditCards"
  ).safeObject.toString();
  const upi = t(data, "paymentMode.upi").safeObject.toString();

  const gst = t(data, "certification.gst").safeObject.toString();
  const other = t(data, "certification.other").safeObject;

  const businessKeywords = data.businessKeyWords;
  const marketKeywords = data.businessKeyWords;

  const agentname = t(data, "agentInformation.agentName").safeObject;
  const agentid = t(data, "agentInformation.agentId").safeObject;

  const [paymentDone, setpaymentDone] = useState(false);
  
  const [value, setValue] = useState(null);

  const changeHandler = (e) => {
    setValue(e.target.innerText);
  }

  const saveButtonHandler = async(e) =>{
    try{
      let name = e.currentTarget.id
      setTimeout(async() => {
        const {data} = await axios.post('/api/agent/save-edit-input',{
          email:email,
          name:name,
          value:value
        });
        router.reload();
      }, 2000);
    }catch(error){
      toast(error.response.data.message)
    }
  }

  return (
    <div className={classes.shopkidetail}>
      <div>
        <KeyboardBackspaceIcon className={classes.icon} />
      </div>
      <span>Shop Detail</span>
      <section>
        <span>
          <Card background="F6F6FB">
            <h4>{data.workflowStatus}</h4>
            <p>Work Flow Status</p>
          </Card>
        </span>
        <span>
          {data.paymentStatus ? (
            <Card background="FDF5F3">
              <h4>Completed</h4>
              <p>Payment Status</p>
            </Card>
          ) : (
            <Card background="FDF5F3">
              <h4>Not Completed</h4>
              <p>Payment Status</p>
            </Card>
          )}
        </span>
        <span>
          <Card background="FFFAF4">
            <h4>1</h4>
            <p>Visits Summary</p>
          </Card>
        </span>
        <span>
          {data.requestForCorrection ? (
            <Card background="FDF5F3">
              <h4>Yes</h4>
              <p>Request For Corection</p>
            </Card>
          ) : (
            <Card background="FDF5F3">
              <h4>No</h4>
              <p>Request For Corection</p>
            </Card>
          )}
        </span>
      </section>
      {data && (
        <main>
          <span>
            <h5>{data.businessName}</h5>
            <h4>
              <span>Category :- </span>
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.category}
              </span>
              <span id="category" onClick={saveButtonHandler}>
                <DoneIcon
                  style={{
                    position: "relative",
                    top: "5px",
                    left: "8px",
                    fontSize: "20px",
                    color: "var(--dashboard-brown)",
                  }}
                />
                </span>
                {" "}
            </h4>
            <h4>
              <span>Business Name :- </span>
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.businessName}
              </span>
              <span id="businessName" onClick={saveButtonHandler}>
                <DoneIcon
                  style={{
                    position: "relative",
                    top: "5px",
                    left: "8px",
                    fontSize: "20px",
                    color: "var(--dashboard-brown)",
                  }}
                />
                </span>{" "}
            </h4>
            <h4>
              <span>Owner Name :- </span>
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.ownerName}
              </span>
              <span id="ownerName" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span>Owner&apos;s Recording :- </span>
              <br/>
              <audio style={{marginTop:'10px'}} className={classes.audioRecordingSRC} controls src={data.ownerRecording} />
            </h4>
            <h4>
              <span>Mobile Number :- </span>
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.mobileNumber}
              </span>
              <span id="mobileNumber" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.contactPerson}
              </span>
              <span id="contactPerson" onClick={saveButtonHandler}>
                <DoneIcon
                  style={{
                    position: "relative",
                    top: "5px",
                    left: "8px",
                    fontSize: "20px",
                    color: "var(--dashboard-brown)",
                  }}
                />
                </span>
            </h4>
            <h4>
              <span>Image :- </span>
              <span>
                <img
                  style={{ marginBottom: "-5px",borderRadius: "10px" }}
                  height="80%"
                  width="60%"
                  src={data.ownerImage}
                  alt="Image"
                />
              </span>
                <DoneIcon
                  style={{
                    position: "relative",
                    top: "5px",
                    left: "8px",
                    fontSize: "20px",
                    color: "var(--dashboard-brown)",
                  }}
                />{" "}
            </h4>
            <h4>
              <span>Area :- </span>
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.area}
              </span>
              <span id="area" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.location}
              </span>
              <span id="location" onClick={saveButtonHandler}>
                  <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.street}
              </span>
              <span id="street" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.landmark}
              </span>
              <span id="landmark" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.businessAddress}
              </span>
              <span id="businessAddress" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.businessEmail}
              </span>
              <span id="businessEmail" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.businessInformation}
              </span>
              <span id="businessInformation" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {intrestedString}
              </span>
              <span id="interested" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {data.yearOfEstablished}
              </span>
              <span id="yearOfEstablished" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {websiteDataInString}
              </span>
              <span id="website" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {youtubeDataInString}
              </span>
              <span id="isYoutube" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {instagramDataInString}
              </span>
              <span id="isInsta" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {facebookDataInString}
              </span>
              <span id="isFacebook" onClick={saveButtonHandler}>
                <DoneIcon
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
                {data.date}
              </span>
              {/* <span id="isFacebook" onClick={saveButtonHandler}> */}

                <DoneIcon
                  style={{
                    position: "relative",
                    top: "5px",
                    left: "8px",
                    fontSize: "20px",
                    color: "var(--dashboard-brown)",
                  }}
                />{" "}
                {/* </span> */}
            </h4>
            <h4>
              <span>Monday Working:- </span>
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {monday}
              </span>
              <span id="monday" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {tuesday}
              </span>
              <span id="tuesday" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {wednesday}
              </span>
              <span id="wednesday" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {thursday}
              </span>
              <span id="thrusday" onClick={saveButtonHandler}>
                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {friday}
              </span>
              <span id="friday" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {saturday}
              </span>
              <span id="saturday" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {sunday}
              </span>
              <span id="sunday" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {mondaytosaturday}
              </span>
              <span id="mondayToSaturday" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {cash}
              </span>
              <span id="cash" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {debitcredit}
              </span>
              <span id="debitAndCreditCards" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {upi}
              </span>
              <span id="upi" onClick={saveButtonHandler}>

                <DoneIcon
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
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {gst}
              </span>
              <span id="gst" onClick={saveButtonHandler}>

                <DoneIcon
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
            {other && (
              <h4>
                <span>Other Certification :- </span>
                <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                  {other}
                </span>
                <span id="otherthangst" onClick={saveButtonHandler}>

                  <DoneIcon
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
            )}

            <h4>
              <span>Business Keywords :- </span>
              {businessKeywords.map((item, index) => {
                return (<>
                  <span
                   
                    style={{
                      color: "var(--dashboard_red)",

                      font: "normal normal normal 16px Rubik",
                    }}
                    key={index}
                  >
                    {item}
                  </span>
                  <span >

                    <DeleteIcon
                      style={{
                        position: "relative",
                        top: "5px",
                        left: "8px",
                        fontSize: "18px",
                        marginRight: "20px",
                        color: "var(--dashboard-brown)",
                      }}
                    />
                    </span>
                </>);
              })}
            </h4>

            <h4>
              <span>Market Keywords :- </span>
              {marketKeywords.map((item, index) => {
                return (<>
                  <span
                    style={{
                      color: "var(--dashboard_red)",
                      font: "normal normal normal 16px Rubik",
                    }}
                    key={index}
                  >
                    {item}
                  </span>
                    <DeleteIcon
                      style={{
                        position: "relative",
                        top: "5px",
                        left: "8px",
                        fontSize: "18px",
                        marginRight: "20px",
                        color: "var(--dashboard-brown)",
                      }}
                    />
                </>);
              })}
            </h4>
            
            <h4>
            <span>Request For Correction :- </span>
              <span contentEditable={true} suppressContentEditableWarning={true} onBlur={changeHandler}>
                {requestCorrection}
              </span>
              <span id="requestForCorrection" onClick={saveButtonHandler}>

                <DoneIcon
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
                {agentname}
              </span>
                <DoneIcon
                  style={{
                    position: "relative",
                    top: "5px",
                    left: "8px",
                    fontSize: "20px",
                    color: "var(--dashboard-brown)",
                  }}
                />{" "}
            </h4>
            <h4>
              <span>Agent ID :- </span>
              <span>
                {agentid}
              </span>
                <DoneIcon
                  style={{
                    position: "relative",
                    top: "5px",
                    left: "8px",
                    fontSize: "20px",
                    color: "var(--dashboard-brown)",
                  }}
                />{" "}
            </h4>
          </span>
          <span>
            <h3>Feedback</h3>
            <p>{data.feedback}</p>
          </span>
        </main>
      )}
    </div>
  );
}
