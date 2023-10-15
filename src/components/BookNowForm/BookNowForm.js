import { useState } from "react";
import "./BookNowForm.css"
import axios from "axios";
import showToast from 'crunchy-toast';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function BookNowForm() {
  const [address, setAddress] = useState('');
  const [name,setName]=useState('')
  const [quantity,setQuantity]=useState('')
  const [productName,setProductName]=useState('')
  const [save ,setSave]=useState([])

  const saveInfo =()=>{
     const obj ={
        name:name,
        address:address,
        quantity:quantity,
        productName:productName
     }

    const tempArray=[...save,obj]
    setSave(tempArray)
    localStorage.setItem('bookinfo',JSON.stringify(tempArray))

    setName("")
    setAddress("")
    setQuantity("")
    setProductName("")
alert("Your Taxi is Book successfull")
   
//    showToast('Your Taxi is Book successfull', 'success', 3000);
  }

  const fetchLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async function (curruntlocation) {
        const latitude = curruntlocation.coords.latitude;
        const longitude = curruntlocation.coords.longitude;

        const apiurl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        try {
          const response = await axios.get(apiurl)
          console.log(response)
          if (response.data.display_name) {
            const fomated = response.data.display_name;
            setAddress(fomated)
          }
          else {
            setAddress('Address not found')
          }
        } catch (err) {
          console.log(err)
          setAddress('Featch error')
        }

      })
    }
    else {

    }
  }

  function showToast(){
    alert("successful")
    showToast('This is a sample toast message', 'success', 3000);
  }
 
  return (
    <>
      <button type="button" class=" btn-card" data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Book Now
      </button>

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="modal-header">
              <h5 className="modal-title ">Book Form</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>

            <div className="modal-body">


              <input 
              type="text" 
              placeholder="Enter your Name" 
              className="input-type" 
               value={name}
               onChange={(e)=>{setName(e.target.value)}}
              /> <br />

              <input type="text" placeholder="Enter your location" className="input-type" value={address}  onChange={(e)=>{setAddress(e.target.value)}} /><span className="get-location" onClick={fetchLocation}><FontAwesomeIcon icon={faLocationDot} /> </span>
              <br />


              <input type="text" placeholder="Enter your Mobile No." className="input-type" value={quantity} onChange={(e)=>{
                setQuantity(e.target.value)
              }} /> <br />

              {/* <input type="text" placeholder="Product Name" className="input-type" value={productName} onChange={(e)=>{
                setProductName(e.target.value)
              }} /> <br /> */}

            </div>
            <div className=" but">
              <button  type="button" className="btn-book " 
              onClick={ saveInfo}
              >Book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}