import React from "react";
import Button from "./Button";

const Contacts = ({ allContacts, setallContacts }) => {
    let editBtnInnerText = 'Edit <i class="fa-solid fa-user-pen fa-2xs"></i>'
    let deleteBtnInnerText = 'Delete <i class="fa-solid fa-user-xmark fa-2xs"></i>'

    const deleteContact = (index) => {
        allContacts.splice(index, 1)
        setallContacts([...allContacts]);
    }

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Address</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {allContacts.map((contact, i) => {
                    return (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{contact.name}</td>
                            <td>{contact.email}</td>
                            <td>{contact.number}</td>
                            <td>{contact.address}</td>
                            <td>
                                <Button innerText={editBtnInnerText} btClass='btn btn-sm btn-success' />
                            </td>
                            <td>
                                <Button
                                    innerText={deleteBtnInnerText}
                                    btClass='btn btn-sm btn-warning'
                                    clickHandler={deleteContact}
                                    param={i}
                                />
                            </td>
                        </tr>
                    )
                })}

            </tbody>
        </table>
    );
};

export default Contacts;
