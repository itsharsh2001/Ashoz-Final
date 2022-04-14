import classes from "./ShopKiDetail.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Card from "../../../UI/Card";
import EditIcon from "@mui/icons-material/Edit";
import t from "typy";
import { CancelSharp } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import {useState} from 'react'


export default function ShopKiDetail({ data }) {
  
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
  console.log(monday);
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
              <span>
                {data.category}
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
              <span>Owner&apos;s Recording :- </span>
              <br/>
              <audio style={{marginTop:'10px'}} className={classes.audioRecordingSRC} controls src={data.ownerRecording} />
            </h4>


            <h4>
              <span>Business Name :- </span>
              <span>
                {data.businessName}
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
                {data.ownerName}
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
                {data.mobileNumber}
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
                {data.contactPerson}
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
              <span>Image :- </span>
              <span>
                <img
                  style={{ marginBottom: "-5px", borderRadius: "10px" }}
                  height="80%"
                  width="60%"
                  src={data.ownerImage}
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
            </h4>
            <h4>
              <span>Area :- </span>
              <span>
                {data.area}
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
                {data.location}
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
                {data.street}
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
                {data.landmark}
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
                {data.businessAddress}
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
                {data.businessEmail}
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
                {data.businessInformation}
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
                {intrestedString}
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
                {data.yearOfEstablished}
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
                {websiteDataInString}
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
                {youtubeDataInString}
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
                {instagramDataInString}
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
                {facebookDataInString}
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
                {data.date}
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
                {monday}
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
                {tuesday}
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
                {wednesday}
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
                {thursday}
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
                {friday}
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
                {saturday}
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
                {sunday}
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
                {mondaytosaturday}
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
                {cash}
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
                {debitcredit}
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
                {upi}
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
                {gst}
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
            {other && (
              <h4>
                <span>Other Certification :- </span>
                <span>
                  {other}
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
            )}

            <h4>
              <span>Business Keywords :- </span>
              {businessKeywords.map((item, index) => {
                return (
                  <span
                    style={{
                      color: "var(--dashboard_red)",

                      font: "normal normal normal 16px Rubik",
                    }}
                    key={index}
                  >
                    {item}
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
                );
              })}
            </h4>

            <h4>
              <span>Market Keywords :- </span>
              {marketKeywords.map((item, index) => {
                return (
                  <span
                    style={{
                      color: "var(--dashboard_red)",
                      font: "normal normal normal 16px Rubik",
                    }}
                    key={index}
                  >
                    {item}
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
                );
              })}
            </h4>
            
            <h4>
            <span>Request For Correction :- </span>
              <span>
                {requestCorrection}
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
                {agentname}
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
                {agentid}
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
            <p>{data.feedback}</p>
          </span>
        </main>
      )}
    </div>
  );
}
