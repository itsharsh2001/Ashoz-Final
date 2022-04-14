import classes from "./AddShop.module.css";
import SideBar from "../../UI/SideBar";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Audio from "../DashBoardExtra/audio/Audio";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios'
import useGeoLocation from '../../../hooks/useGeoLocation'
import useRecordingsList from "../../../hooks/use-recordings-list";
import useRecorder from "../../../hooks/useRecorder";
import {useEffect} from 'react'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

export default function AddShop() {

  const [audioRecording, setAudioRecording] = useState(null)


  const location = useGeoLocation();
  const coordinates = location.coordinates;
  const latlong = `lat = ${coordinates.lat} , long=${coordinates.lng}`
  const [uploading, setUploading] = useState(false)
  // form data states
  const [clickedImage, setClickedImage] = useState(null);
  const [businessKeywords, setBusinessKeywords] = useState([]);
  const [marketKeywords, setMarketKeywords] = useState([]);


  const [businessName, setBusinessName] = useState(null);
  const [ownerName, setOwnerName] = useState(null);
  const [mobileNumber, setMobileNumber] = useState(null);
  const [contactPerson, setContactPerson] = useState(null);
  const [businessCategory, setBusinessCategory] = useState(null);
  const [area, setArea] = useState(null);
  const [street, setStreet] = useState(null);
  const [landmark, setLandmark] = useState(null);
  const [businessAddress, setBusinessAddress] = useState(null);
  const [businessEmail, setBusinessEmail] = useState(null);
  const [businessInformation, setBusinessInformation] = useState(null);
  const [interested, setInterested] = useState(false);
  const [website, setWebsite] = useState(false);
  const [facebook, setFacebook] = useState(false);
  const [instagram, setInstagram] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [notInterested, setNotInterested] = useState(null);
  const [yearOfEstabished, setYearOfEstabished] = useState(null);
  const [feedBack, setFeedBack] = useState(null);
  // const [location, setLocation] = useState(null);
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [saturday, setSaturday] = useState(false);
  const [sunday, setSunday] = useState(false);
  const [mondayToSaturday, setMondayToSaturday] = useState(null);

  const [cash, setCash] = useState(false);
  const [debitAndCredit, setDebitAndCredit] = useState(false);
  const [upi, setUPI] = useState(false);
  
  const [gst, setGST] = useState(false);
  const [gstOther, setGSTOther] = useState(false);
  const [gstOtherValue, setGSTOtherValue] = useState(null);
  const [imageLink, setImageLink] = useState(null);
  const [visited, setVisited] = useState(false)




  const gstHandler = () => {
    setGST(true);
    setGSTOther(false);
  }

  const addBusinessKeyword = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setBusinessKeywords([...businessKeywords, event.target.value]);
      event.target.value = "";
    }
  };

  const removeBusinessKeyword = (index) => {
    setBusinessKeywords([
      ...businessKeywords.filter(
        (tag) => businessKeywords.indexOf(tag) !== index
      ),
    ]);
  };

  const addMarketingKeyword = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setMarketKeywords([...marketKeywords, event.target.value]);
      event.target.value = "";
    }
  };

  const removeMarketingKeyword = (index) => {
    setMarketKeywords([
      ...marketKeywords.filter((tag) => marketKeywords.indexOf(tag) !== index),
    ]);
  };

  function handleTakePhoto(dataUri) {
    setClickedImage(dataUri);
  }

  const deleteClickedImage = () => {
    setClickedImage(null);
  };

  const submitButtonHandler = async ()=>{
    setUploading(true)
    let audioLink;

    if(clickedImage){
      try{
        const {data} = await axios.post('/api/uploadFiles/uploadImage',{
          image:clickedImage
        })
        setImageLink(data.message)
  
      }catch(error){
        toast(error.response.data.message)
        setUploading(false)
      }
    }

    if(audioRecording){
      try{
        var formData = new FormData();
        formData.append("pdf", audioRecording);
        const {data} = await axios.post('/api/uploadFiles/upload-video',formData)
        audioLink = data.message
      }catch(error){
        setUploading(false)
        toast(error.response.data.message)
      }
    }


    try{
      const {data} = await axios.post('/api/agent/add-shop',{
        businessName,
        ownerName,
        mobileNumber,
        contactPerson,
        category:businessCategory,
        area,
        location:latlong,
        street,
        landmark,
        businessAddress,
        businessEmail,
        businessInformation,
        interested:interested,
        website,
        instagram,
        facebook,
        youtube,
        notInterestedanswer:notInterested,
        monday,
        tuesday,
        wednesday,
        thrusday:thursday,
        friday,
        saturday,
        sunday,
        mondayToSaturday,
        cash,
        debitAndCreditCards:debitAndCredit,
        upi,
        yearOfEstablished:yearOfEstabished,
        gst,
        otherThanGst:gstOtherValue,
        businessKeyWords:businessKeywords,
        marketKeyWords:marketKeywords,
        feedback:feedBack,
        ownerImage:imageLink,
        visited,
        ownerRecording:audioLink
    })
    toast(data.message)
    setUploading(false)
  }
    catch(error){
      toast(error.response.data.message)
      setUploading(false)
    }
  }

  return (
    <>
      <div className={classes.dashboard}>
        <SideBar agent={true} superAdmin={false} visualTeam={false} marketingAdmin={false} webDeveloper={false} />
        <main className={classes.form}>
          <h2>
            <ArrowBackIcon className={classes.icon} />
            Fill The Details Carefully
          </h2>
          <h3>Business Name</h3>
          <input required onChange={(e)=>{setBusinessName(e.target.value)}} type="text" name="" placeholder="Enter Business Name" id="" />

          <h3>Owner Name</h3>
          <input required onChange={(e)=>{setOwnerName(e.target.value)}} type="text" name="" placeholder="Enter Owner Name" id="" />

          <h3>Mobile Number</h3>
          <input required onChange={(e)=>{setMobileNumber(e.target.value)}} type="tel" name="" placeholder="Enter Mobile Name" id="" />

          <h3>Contact Person</h3>
          <input required
           onChange={(e)=>{setContactPerson(e.target.value)}}
            type="text"
            name=""
            placeholder="Enter Contact Person Name"
            id=""
          />

          <h3>Business Category</h3>
          <select required onChange={(e)=>{setBusinessCategory(e.target.value)}}>
            <option value="Select Category">Select Category</option>
            <option value="Salons and Personal Care">Salons and Personal Care</option>
            <option value="Industrial Supplies and Hardware">Industrial Supplies and Hardware</option>
            <option value="Sales and Services">Sales and Services</option>
            <option value="Fitness and Sports">Fitness and Sports</option>
            <option value="Personal Care">Personal Care</option>
            <option value="Home and Kitchen Appliances">Home and Kitchen Appliances</option>
            <option value="Shopping">Shopping</option>

            <option value="Furniture">Furniture</option>
            <option value="Mobile and Accessories">Mobile and Accessories</option>
            <option value="Health and Medical needs">Health and Medical needs</option>
            <option value="Education and Book Shops">Education and Book Shops</option>
            <option value="Food and Beverages">Food and Beverages</option>
            <option value="Automobiles sales and services">Automobiles sales and services</option>
            <option value="Fashion">Fashion</option>
            <option value="Sports and Accessories">Sports and Accessories</option>
            <option value="Daily needs">Daily needs</option>
            <option value="Jewelry">Jewelry</option>
            <option value="Tourism and Travel">Tourism and Travel</option>
            <option value="Bakery's">Bakery&apos;s</option>
            <option value="Photography">Photography</option>
            <option value="Hospitality Industry">Hospitality Industry</option>
            <option value="Pet Supplies shops and clinics">Pet Supplies shops and clinics</option>
          </select>

          <h3>Area</h3>
          <select required onChange={(e)=>{setArea(e.target.value)}}>
            <option value="Select Area">Select Area</option>
            <option value="Arundelpet">Arundelpet</option>
            <option value="Brodipet">Brodipet</option>
            <option value="kortipadu">kortipadu</option>
            <option value="Lakshmipuram">Lakshmipuram</option>
            <option value="Lodge Center">Lodge Center</option>
            <option value="Naaz Center">Naaz Center</option>
            <option value="Kothapeta">Kothapeta</option>
            <option value="Pattabipuram">Pattabipuram</option>
            <option value="SVN Colony">SVN Colony</option>
            <option value="Amravathi Road">Amravathi Road</option>
            <option value="Mahatma Gandhi Inner Ring Road">Mahatma Gandhi Inner Ring Road</option>
          </select>

          <h3>Location</h3>
          {/* <input onChange={(e)=>{setLocation(e.target.value)}} type="text" name="" placeholder="Enter Location"  id="" /> */}
          <p>
            {
              location.loaded ? JSON.stringify(coordinates) : "Location data not available yet."
            }
          </p>

          <h3>Street</h3>
          <input onChange={(e)=>{setStreet(e.target.value)}} type="text" name="" placeholder="Enter Street" id="" />

          <h3>Landmark</h3>
          <input onChange={(e)=>{setLandmark(e.target.value)}} type="text" name="" placeholder="Enter Landmark" id="" />

          <h3>Business Address</h3>
          <input
           onChange={(e)=>{setBusinessAddress(e.target.value)}}
            type="text"
            name=""
            placeholder="Enter Business Address"
            id=""
          />

          <h3>Business Email</h3>
          <input required
           onChange={(e)=>{setBusinessEmail(e.target.value)}}
            type="email"
            name=""
            placeholder="Enter Business Email Address"
            id=""
          />

          <h3>Business Information</h3>
          <input required
           onChange={(e)=>{setBusinessInformation(e.target.value)}}
            type="text"
            name=""
            placeholder="Enter Business Information"
            id=""
          />

          <h3>Interested</h3>
          <input onClick={()=>{setInterested(true)}} type="checkbox" name="" id="" />
          <span>Interested</span>

          <h3>Owner&apos;s Recording</h3>
          <input
              type="file"
              className={classes.audiocss}
              onChange={(e) => setAudioRecording(e.target.files[0])}
              />

          <h3>Owner&apos;s Image</h3>
          {clickedImage ? (
            <>
              <img className={classes.clickImage} src={clickedImage} alt="" />
              <div className={classes.deleteIcon}>
                <DeleteIcon
                  onClick={deleteClickedImage}
                  className={classes.delete}
                />
              </div>
            </>
          ) : (
            <Camera
              onTakePhoto={(dataUri) => {
                handleTakePhoto(dataUri);
              }}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              isMaxResolution={true}
              imageCompression = {0.80}
            />
          )}

          <h3>Website</h3>
          <input onClick={()=>{setWebsite(true)}} type="radio" name="website" id="" />
          <span>Yes</span>
          <br />
          <br />
          <input type="radio" name="website" id="" />
          <span>No</span>

          <h3>Facebook</h3>
          <input onClick={()=>{setFacebook(true)}} type="radio" name="facebook" id="" />
          <span>Yes</span>
          <br />
          <br />
          <input type="radio" name="facebook" id="" />
          <span>No</span>

          <h3>Instagram</h3>
          <input onClick={()=>{setInstagram(true)}} type="radio" name="instagram" id="" />
          <span>Yes</span>
          <br />
          <br />
          <input type="radio" name="instagram" id="" />
          <span>No</span>

          <h3>Youtube</h3>
          <input onClick={()=>{setYoutube(true)}} type="radio" name="youtube" id="" />
          <span>Yes</span>
          <br />
          <br />
          <input type="radio" name="youtube" id="" />
          <span>No</span>

          <h3>Not Interested</h3>
          <input onChange={(e)=>{setNotInterested(e.target.value)}} type="text" name="" placeholder="Enter Owner Answer" id="" />

          <h3>Working Hours</h3>
          {!mondayToSaturday && <><input onClick={()=>{setMonday(true)}} type="checkbox" name="" id="" />
          <span>Monday</span>
          <br />
          <br />
          <input onClick={()=>{setTuesday(true)}} type="checkbox" name="" id="" />
          <span>Tuesday</span>
          <br />
          <br />
          <input onClick={()=>{setWednesday(true)}} type="checkbox" name="" id="" />
          <span>Wednesday</span>
          <br />
          <br />
          <input onClick={()=>{setThursday(true)}} type="checkbox" name="" id="" />
          <span>Thrusday</span>
          <br />
          <br />
          <input onClick={()=>{setFriday(true)}} type="checkbox" name="" id="" />
          <span>Friday</span>
          <br />
          <br />
          <input onClick={()=>{setSaturday(true)}} type="checkbox" name="" id="" />
          <span>Saturday</span>
          <br />
          <br /></>}
          <input onClick={()=>{setSunday(true)}} type="checkbox" name="" id="" />
          <span>Sunday</span>
          <br />
          <br />
          <input onClick={()=>{setMondayToSaturday(()=>{return !mondayToSaturday})}} type="checkbox" name="" id="" />
          <span>Monday To Saturday</span>

          <h3>Payment Mode</h3>
          <input onClick={()=>{setCash(true)}} type="checkbox" name="" id="" />
          <span>Cash</span>
          <br />
          <br />
          <input onClick={()=>{setDebitAndCredit(true)}} type="checkbox" name="" id="" />
          <span>Debit & Credit Cards</span>
          <br />
          <br />
          <input onClick={()=>{setUPI(true)}} type="checkbox" name="" id="" />
          <span>UPI Payments</span>

          <h3>Year Of Established</h3>
          <input onChange={(e)=>{setYearOfEstabished(e.target.value)}} type="date" name="" id="" />

          <h3>Visit</h3>
          <input onClick={()=>{setVisited(true)}} type="checkbox" name="" id="" />
          <span>Visited</span>

          <h3>Certification</h3>
          <input onClick={gstHandler} type="radio" name="gst" id="" />
          <span >GST</span>
          <br />
          <br />
          <input onClick={()=>{setGSTOther(true)}} type="radio" name="gst" id="" />
          <span>Other</span>
          {gstOther && <input
            onChange={(e)=>{setGSTOtherValue(e.target.value)}}
            style={{ marginTop: "20px" }}
            type="text"
            name=""
            placeholder="Enter Other"
            id=""
          />}

          <h3>Business Key Words</h3>
          <input
            style={{ marginBottom: "20px" }}
            type="text"
            onKeyUp={(event) => addBusinessKeyword(event)}
            placeholder="Add business Key Words"
          />
          {businessKeywords.map((tag, index) => (
            <li key={index}>
              <span>{tag}</span>
              <CloseIcon
                onClick={() => removeBusinessKeyword(index)}
                style={{
                  fontSize: "20px",
                  position: "relative",
                  left: "2px",
                  top: "4px",
                  backgroundColor: "var(--dashboard_red)",
                  color: "var(--white)",
                  padding: "3px",
                  borderRadius: "50px",
                }}
              />
            </li>
          ))}

          <h3>Market Key Words</h3>
          <input
            style={{ marginBottom: "20px" }}
            type="text"
            onKeyUp={(event) => addMarketingKeyword(event)}
            placeholder="Add Marketing Keywords by Business owner"
          />
          {marketKeywords.map((tag, index) => (
            <li key={index}>
              <span>{tag}</span>
              <CloseIcon
                onClick={() => removeMarketingKeyword(index)}
                style={{
                  fontSize: "20px",
                  position: "relative",
                  left: "2px",
                  top: "4px",
                  backgroundColor: "var(--dashboard_red)",
                  color: "var(--white)",
                  padding: "3px",
                  borderRadius: "50px",
                }}
              />
            </li>
          ))}

          <h3>Feedback</h3>
          <input
            onChange={(e)=>{setFeedBack(e.target.value)}}
            style={{ marginBottom: "20px" }}
            type="text"
            name=""
            placeholder="Enter Feedback"
            id=""
          />
          {
            uploading?
            <button onClick={submitButtonHandler} disabled className={classes.redbutton}>Uploading...</button>
            :
            <button onClick={submitButtonHandler} className={classes.redbutton}>Submit</button>
          }
         
        </main>
      </div>
    </>
  );
}
