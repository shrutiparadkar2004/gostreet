import React, { useState, useEffect } from 'react';
import './Review.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import OneStar from './img/one.png';
import TwoStar from './img/five.png';
import ThreeStar from './img/four.png';
import FourStar from './img/three.png';
import FiveStar from './img/two.png';
import showToast from 'crunchy-toast';
import ContactCard from '../../components/ContactCard/ContactCard';


export default function Home() {
  const [contacts, setContacts] = useState([
    {
      name: "Sukhada",
      title: "Ren Trip Gonna be my First Choice Forever",
      description: "It has been an awesome experience for me when I got to roam places like Dipor Bil, Kamakhya Temple, Umanadna temple and many more places. Before I started the journey I wasn't sure I would get chance to visit and these all beautiful places.",
      profession: "Senior Teacher, Bhopal",
      emoji:"⭐⭐⭐⭐⭐",
    }
  ])

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [profession, setProfession] = useState('');
  const [emoji, setEmoji] =useState('');
  const [editIndex, setEditIndex] = useState('-1');
  const [isEditMode, setIsEditMode] = useState(false);

  const addContact = () => {

    if (!name) {
      showToast('Name is required...', 'alert', 3000);
      return;
    }
    if (!title) {
      showToast('Title is required...', 'alert', 3000);
      return;
    }
    if (!emoji) {
      showToast('Emoji is required...', 'alert', 3000);
      return;
    }

    if (!profession) {
      showToast('Profession is required...', 'alert', 3000);
      return;
    }
    if (!description) {
      showToast('Description is required...', 'alert', 3000);
      return;
    }
    const obj = {
      name: name,
      title: title,
      emoji: emoji,
      description : description,
      profession: profession
    }

    const newContacts = [...contacts, obj]
    setContacts(newContacts);
    saveToLocalStorage(newContacts);

    showToast('Contact added Successfully...', 'success', 3000);

    setTitle('')
    setDescription('')
    setName('')
    setProfession('')
    setEmoji('')


  };

  const deleteContact = (mobileNumber) => {
    let indexToBeDeleted = -1;
    contacts.forEach((contactDetail, index) => {
      if (contactDetail.name == mobileNumber) {
        indexToBeDeleted = index;
      }
    })

    contacts.splice(indexToBeDeleted, 1);

    saveToLocalStorage(contacts);

    setContacts([...contacts])

    showToast("Contact deleted Successfully..", 'success', '3000')
  };

  const saveToLocalStorage = (contactsData) => {
    localStorage.setItem('contacts', JSON.stringify(contactsData));
  }

  const loadFromLocalStorage = () => {
    const contactsData = JSON.parse(localStorage.getItem('contacts'));
    if (contactsData) {
      setContacts(contactsData);
    }
  }

  const enableEditMode = (index) => {
    const contactsData = contacts[index];
    setName(contactsData.name);
    setTitle(contactsData.title);
    setEmoji(contactsData.emoji);
    setDescription(contactsData.description);
    setProfession(contactsData.profession);
    setEditIndex(index);
    setIsEditMode(true);
  }

  const editContact = () => {
    const obj = {
      title: title,
      description:description,
      name: name,
      profession:profession,
      emoji: emoji
    }

    contacts[editIndex] = obj;
    setContacts([...contacts]);
    saveToLocalStorage(contacts);

    showToast('Contact Edited Successfully', 'success', 3000);

    setTitle('');
    setDescription('');
    setName('');
    setProfession('');
    setEmoji('');

    setIsEditMode(false);
  }

  useEffect(() => {
    loadFromLocalStorage();
  }, [])


  return (
    <>
      <Navbar />
      <div className='customer-review'>
        <h2>OVERALL CUSTOMER REVIEW</h2>
        <div className='c-r-1'>
          <div className='c-r-2'>
            <p children='p1'>Overall Customer <br />Satisfaction</p>
            <span className='spa1'>4.1</span><span className='spa'>/5</span>
            <p className='p2'>based on 2003 reviews</p>
          </div>
          <div className='c-r'>
            100% Verified Feedback & Reviews From Customers
          </div>
          <div className='img-c'>
            <div>
              <img src={FiveStar} alt="fivestar" /><span>1326</span>
            </div>
            <div>
              <img src={FourStar} alt="fourstar" /><span>221</span>
            </div>
            <div>
              <img src={ThreeStar} alt="threestar" /><span>116</span>
            </div>
            <div>
              <img src={TwoStar} alt="twostar" /><span>73</span>
            </div>
            <div>
              <img src={OneStar} alt="onestar" /><span>267</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className='app-body'>
        <h2 className='app-subheading'>
                        Add Review
                    </h2>
               <div className='add-contacts-container'>
                    
                    <div>
                        <form>
                            <input
                            className='input-field' 
                            type='text' 
                            placeholder='EnterRevice Title Here'  
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            />
                            
                            <input 
                            className='input-field' 
                            type='text' 
                            placeholder='Enter Revice Description Here' 
                            value={description}
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            />

                            <input 
                            className='input-field' 
                            type='text' 
                            placeholder='Enter Name Here' 
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }}
                            />

                          <input 
                            className='input-field' 
                            type='text' 
                            placeholder='Enter Profession Here' 
                            value={profession}
                            onChange={(e) => {
                                setProfession(e.target.value)
                            }}
                            />

                          <input 
                            className='input-field' 
                            type='text' 
                            placeholder='Add Emoji Here' 
                            value={emoji}
                            onChange={(e) => {
                                setEmoji(e.target.value)
                            }}
                            />

                            <button 
                            className='add-btn' 
                            type='button' 
                            onClick={() => {
                                isEditMode ? editContact() : addContact();
                            }}>
                                {isEditMode ? 'Edit Contact' : 'Add Review'}
                            </button>
                        </form>
                    </div>
                </div>
                <div className='review-container'>
                    {
                        contacts.map((contact, index) => {
                            return(
                                <ContactCard key={index}
                                title={contact.title}
                                description={contact.description}
                                name={contact.name}
                                profession={contact.profession}
                                emoji={contact.emoji}
                                deleteContact={deleteContact}
                                enableEditMode={enableEditMode}
                                index={index}/>
                            )
                        })
                    }
                </div>
            </div>
      <Footer />
    </>
  );
}

