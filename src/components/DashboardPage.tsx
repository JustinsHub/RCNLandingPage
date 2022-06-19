import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchManyRandomUsers } from '../actions/actions-creators'
import useFormData from './hooks/useFormData'

const DashboardPage:React.FC = () => {
    const INITIAL_DATA = {
        fullName: ''
    }
    const { users } = useSelector((state: any) => state.fetchUsers, shallowEqual)
    const dispatch = useDispatch()

    const [isLoading, setIsLoading] = useState(false)

    const [searchUser, handleChange] = useFormData(INITIAL_DATA)

    useEffect(() => {
        dispatch(fetchManyRandomUsers(10) as any)
        setIsLoading(() => true)
    }, [dispatch])


    const Users = 
    <div>
        {users?.results?.filter((users: any) => {
            if(searchUser.fullName === '') {
                return users
            }else if (users.name.first.toLowerCase().includes(searchUser.fullName.toLowerCase()) || users.name.last.toLowerCase().includes(searchUser.fullName.toLowerCase())) {
                return users
            }
        }).map((user:any, i:number) => 
            <div key={i}>
                <div>{user.name.first} {user.name.last}</div>
            </div>
        )}
    </div>

    return (
        <div>
            DashboardPage
            <form>
                <label htmlFor="Searching User Input"></label>
                <input
                name='fullName'
                value={searchUser.fullName}
                onChange={handleChange}
                placeholder="Search User"
                />
                <button>Search</button>
            </form>
            <div>
               {Users}
            </div>
        </div>
    )
}

export default DashboardPage