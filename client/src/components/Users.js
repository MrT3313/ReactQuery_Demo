// components
import { 
  Flex, 
} from 'mrt-components'

const Users = ({ 
  // rQuery
  isLoading,
  isFetching,
  isError, error,
  users,
}) => {

  console.log('IS LOADING', isLoading)
  console.log('IS FETCHING', isFetching)
  console.log('USERS', users)
  return(
    <Flex justify="space-around" width="100%">
      <Flex column
        position="relative"
        padding="0 30px 30px 30px"
        border='2px solid blue'
        borderRadius="5px"
      >
        <h3>The Users:</h3>


        {(isLoading) ? 'Loading...' 
        : isError ? (
          error.message
        ) 
        : (
          <>
            {/* TODO: why cant i remove the optional chaining?  */}
            {users?.map(user => {
              return (
                <Flex
                  key={user.id}
                >
                  <div>{user.name}-{user.id}</div>
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
        <form>
          <input
            type="text"
            id="addUser"
            name="addUser"
          />
          <button>Submit</button>
        </form>
      </Flex>
    </Flex>
  )
}

export default Users