import { useState } from 'react'
import { post, del } from '../request'
// components
import { 
  Flex, 
} from 'mrt-components'
import UserCount from './UserCount'

// react router
import { Link } from 'react-router-dom'

// rQuery
import { useMutation } from 'react-query'
import { api } from '../rQuery'
import { queryClient } from '../rQuery'

const Users = ({
  throwRandomErrors
}) => {
  // state 
  const [newName, setNewName] = useState('')
  // hooks
  const {
    status,
    isLoading,
    isError, error, 
    isFetching,
    isSuccess,
    data: users,
    refetch: refetchUseGetUsers
  } = api.useGetUsers(throwRandomErrors)

  // mutations
  const { mutate: useAddUser } = useMutation(async (e) => {
    e.preventDefault()
    await post('users', {
      name: newName
    })
  }, {
    onSuccess: (data) => {
      setNewName('')
      queryClient.invalidateQueries('users')
    },
    onError: (err) => {
      console.log('there was an error', err)
    },
    onSettled: (data, err) => {
      console.log('we are totally done')
    }
  })
  const {mutate: deleteUser } = useMutation(async (userId) => {
    await del('user', { userId })
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"])
    }
  })

  return(
    <>
      <Flex justify="center" width="100%">
        <UserCount />
        <button
          onClick={refetchUseGetUsers}
        >{isSuccess ? 'Refetch Users' :  "Get Users"}</button>
      </Flex> 
      <Flex justify="space-around" width="100%">
        <Flex column
          position="relative"
          padding="0 30px 30px 30px"
          border='2px solid blue'
          borderRadius="5px"
        >
          <h3>The Users:</h3>


          {isLoading ? 'Loading...' 
          : isError ? (
            error.message
          ) 
          : (
            <>
              {users.map(user => {
                return (
                  <Flex
                    key={user.id}
                  >
                    <Link
                      to={{
                        pathname: `/user/${user.id}`
                      }}
                    >
                      {user.name}-{user.id}
                    </Link>
                    <Flex
                      cursor="pointer"
                      marginLeft="10px"
                      onClick={() => {
                        console.log('DELETE USER', user.id)
                        deleteUser(user.id)
                      }}
                    >❌</Flex>
                  </Flex>
                )
              })}
              {isFetching && 
                <Flex
                  position="absolute"
                  bottom="5px"
                  right="5px"
                >
                  Updating...
                </Flex>
              }
            </>
          )}
        </Flex>
        <Flex column>
          <div>Add User:</div>
          <form
            onSubmit={useAddUser}
          >
            <input
              type="text"
              id="addUser"
              name="addUser"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </Flex>
      </Flex>
    </>
  )
}

export default Users