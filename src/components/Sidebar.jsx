import React from 'react'

const Sidebar = () => {
    return (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action">
                <i className="fa-solid fa-address-book"></i> All Contacts 
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <i className="fa-solid fa-star"></i> Favorites
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <i className="fa-solid fa-people-group"></i> Groups
            </a>
            <a href="#" className="list-group-item list-group-item-action" data-bs-toggle="modal" data-bs-target="#contact-modal">
                <i className="fa-solid fa-user-plus"></i> Add Contact
            </a>
        </div>
    )
}

export default Sidebar