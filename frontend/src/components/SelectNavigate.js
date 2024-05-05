import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../utils/loginSlice';

const Dropdown = ({ name, _id, isAdmin }, [flag, setFlag]) => {

    const handleDropBox = ([flag, setFlag]) => {

        if (flag) {
            setFlag(false)
        }
        else {
            setFlag(true)
        }
    }
    const dispatch = useDispatch();

    if (flag) {
        return (
            <div class="relative inline-block text-left" onClick={() => handleDropBox([flag, setFlag])}>
                <div>
                    <button type="button" class="inline-flex w-full justify-center gap-x-1 rounded-md bg-inherit px-2 py-1 text-sm font-bold text-white shadow-sm ring-1 ring-inset ring-gray-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        {isAdmin ? <p>Admin</p> : <p>{name}</p>}
                        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
                <div class="absolute right-0 z-10 mt-1 w-40 rigin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="py-1" role="none">
                        <Link to={"/users/profile/" + _id} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Profile</Link>
                        {isAdmin ? <Link to={"/products/manage"} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Manage Products</Link> : null}
                        {isAdmin ? <Link to={"/users/manage/"} class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Manage Users</Link> : null}
                        <form method="POST" action="#" role="none">
                            <p class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3" onClick={() => {
                                dispatch(logOut());
                                localStorage.removeItem('userInfo');
                            }}>Sign out</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div class="relative inline-block text-left" onClick={() => handleDropBox([flag, setFlag])}>
                <div>
                    <button type="button" class="inline-flex w-full justify-center gap-x-1 rounded-md bg-inherit px-2 py-1 text-sm font-bold text-white shadow-sm ring-1 ring-inset ring-gray-300" id="menu-button" aria-expanded="true" aria-haspopup="true">
                        {isAdmin ? <p>Admin</p> : <p>{name}</p>}
                        <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}
export default Dropdown