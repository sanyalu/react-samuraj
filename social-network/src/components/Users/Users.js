import React from "react";
import styles from "./Users.module.css";
import avatarImg from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let pageNumbers = pages.map(page => {
        return (
            <span
                className={`${props.currentPage === page ? styles.selectedPage : ''} ${styles.pageNumber}`}
                onClick={(e) => props.setCurrentPage(page)}>
                    {page}
                </span>
        )
    });

    return (
        <div>
            <div>
                {pageNumbers}
            </div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <NavLink to={`/profile/${user.id}`}>
                                        <img
                                            className={styles.userAvatar}
                                            src={user.photos.small
                                                ? user.photos.small
                                                : avatarImg}
                                            alt=""/>
                                    </NavLink>

                                </div>
                                <div>
                                    {
                                        user.followed
                                            ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                                            : <button onClick={() => props.follow(user.id)}>Follow</button>
                                    }

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>
                                        {user.name}
                                    </div>
                                    <div>
                                        {user.status ? user.status : 'Not status'}
                                    </div>
                                </span>
                                <span>
                                    <div>
                                        {'user.location.country'}
                                    </div>
                                    <div>
                                        {'user.location.city'}
                                    </div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default Users;


