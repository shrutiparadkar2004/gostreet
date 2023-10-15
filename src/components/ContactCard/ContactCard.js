import './ContactCard.css'

export default function ContactCard({title, description, name, profession,emoji,deleteContact, enableEditMode, index}) {

    return (
        <div className='contact-card'>
            <p>{title}</p>
            <p>{description}</p>
            <p>{name}</p>
            <p>{profession}</p>
            <p>{emoji}</p>
            <span className='icon-delete-contact' 
            onClick={() => {
                deleteContact(name)
            }}>🗑️</span>
            <span className='icon-edit-contact' 
            onClick={() => {
                enableEditMode(index)
            }}>🖋️</span>
        </div>
    )
}