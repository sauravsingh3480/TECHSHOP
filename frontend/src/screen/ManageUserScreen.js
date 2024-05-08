import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const ManageUser = () => {


    const [users, setUsers] = useState([]);

    const loginData = useSelector(store => store.login.loginData)
    useEffect(() => {
        profileAPI()
    }, []
    )

    async function profileAPI() {
        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + loginData.token
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data)
            })
            .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
            });

    }
    const UserCard = ({ _id, name, isAdmin, email }) => {
        return (
            <div className="w-full flex justify-between  border p-4">
                <div className="w-[25%] content-start px-2">{name}</div>
                <div className="w-[40%] content-start px-2">{email}</div>
                {isAdmin ? <div className="w-[25%] content-start px-2">Admin</div> : <div className="w-[25%] content-start px-2">Not Admin</div>}
                {isAdmin ? <div className="w-[5%] px-2"></div> : <div className="w-[5%] px-2 hover:cursor-pointer">X</div>}
            </div>
        );
    }

    if (users.length > 0) {
        return (
            <div className="w-full  m-4">
                <div className="sm:w-[65%] mx-auto">
                    <div>
                        {
                            users.map((item) => {
                                return <UserCard {...item} key={item._id} />;
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>You can not access this page <span> <Link to={"/"} className=" underline font-bold text-red-500"> GO BACK </Link ></span> </h1>
            </div>);
    }
}
export default ManageUser