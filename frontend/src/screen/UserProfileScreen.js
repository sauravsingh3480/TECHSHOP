import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserProfile = () => {

  const [profileData, setProfileData] = useState(null);
  const loginData = useSelector(store => store.login.loginData)

  useEffect(() => {
    profileAPI()
  }, []
  )

  async function profileAPI() {
    fetch('http://127.0.0.1:8000/api/users/profile/', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + loginData?.token
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProfileData(data)
      })
      .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
      });

  }

  if (profileData) {
    return (
      <div className="w-[100%]">
        <div className="sm:w-[55%] w-[85%] flex flex-col border sm:mt-4 mt-12 border-black rounded-md mx-auto">
          <div className="text-4xl font-bold text-center sm:py-4 py-6">My Profile</div>

          <div className="flex  justify-between  border w-full p-4 sm:py-2 bg-gray-50">
            <div >
              <div className="font-semibold text-xl text-red-900">{profileData?.name}</div>
              <div className="text-md text-slate-600">{profileData?.email}</div>
            </div>
            <div>
              <Link to={"/users/profile/update"}>
                <img src={require('../icons/updateProfile.png')} alt="update" className=" w-8 hover:cursor-pointer" />
              </Link>
            </div>

          </div>

          <div className="flex w-ful justify-between py-5 px-3 border sm:py-3">
            <div className="font-semibold">My orders</div>
            <div className="hover:cursor-pointer text-xl font-extrabold"><Link to={"/"}>→</Link></div>
          </div>
          <div className="flex w-ful justify-between py-5 px-3 border sm:py-3">
            <div className="font-semibold">Shiping address</div>
            <div className="hover:cursor-pointer text-xl font-extrabold"><Link to={"/users/address"}>→</Link></div>
          </div>
          <div className="flex w-ful justify-between py-5 px-3 border sm:py-3">
            <div className="font-semibold">Payment methods</div>
            <div className="hover:cursor-pointer text-xl font-extrabold"><Link to={"/"}>→</Link></div>
          </div>
          <div className="flex w-ful justify-between py-5 px-3 border sm:py-3">
            <div className="font-semibold">Promocodes</div>
            <div className="hover:cursor-pointer text-xl font-extrabold"><Link to={"/"}>→</Link></div>
          </div>
          <div className="flex w-ful justify-between py-5 px-3 border sm:py-3">
            <div className=" font-semibold">Delete Account</div>
            <div className="hover:cursor-pointer text-xl font-extrabold"><Link to={"/"}>→</Link></div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return <h1>Loding...</h1>
  }
}
export default UserProfile;