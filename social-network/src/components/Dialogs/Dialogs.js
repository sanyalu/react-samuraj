import s from './Dialogs.module.css';
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={`${s.dialog}`}>
            <NavLink to={path} className={navData => navData.isActive ? s.active : ''}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych' },
        {id: 2, name: 'Andrey' },
        {id: 3, name: 'Sveta' },
        {id: 4, name: 'Sasha' },
        {id: 5, name: 'Valera' }
    ];

    let messagesData = [
        {id: 1, message: 'Hi' },
        {id: 2, message: 'How are you' },
        {id: 3, message: 'oaoaoaoao' }
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs;