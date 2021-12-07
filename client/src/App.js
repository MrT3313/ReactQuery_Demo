import { useState } from 'react'

// components
import { 
  Flex, 
  // Button 
} from 'mrt-components'
import { Users } from './components'

// rQuery
import { api } from './rQuery_provider'

function App() {
  // state
  const [hideUsers, setHideUsers] = useState(false)

  // hooks
  const {
    status,
    isLoading,
    isError, error, 
    isFetching,
    isSuccess,
    data: users,
    refetch: refetchUseGetUsers
  } = api.useGetUsers()

  // methods
  const toggleHideUsers = () => {
    setHideUsers(!hideUsers)
  }

  return (
    <>
      <Flex width="100%">
        <Flex width="100%" justify='center'
          border='2px solid blue'
          borderRadius="5px"
        >
          <div>REACT QUERY</div>
        </Flex>
      </Flex>
      <Flex column>
        <Flex column>
          <Flex width="300px">
            <Flex
              marginRight="20px"
            >
              React Query STATUS:
            </Flex>
            <div>{status}</div>
          </Flex>
          <Flex width="300px">
            <Flex
              marginRight="20px"
            >
              React Query Is LOADING:
            </Flex>
            {isLoading ? (
              <div>TRUE</div>
            ) : (
              <div>FALSE</div>
            )}
          </Flex>
          <Flex width="300px">
            <Flex
              marginRight="20px"
            >
              React Query Is FETCHING:
            </Flex>
            {isFetching ? (
              <div>TRUE</div>
            ) : (
              <div>FALSE</div>
            )}
          </Flex>
          <Flex width="300px">
            <Flex
              marginRight="20px"
            >
              React Query Is ERROR:
            </Flex>
            {isError ? (
              <>
                <div>TRUE</div>
              </>
            ) : (
              <div>FALSE</div>
            )}
          </Flex>
        </Flex>
        <Flex
          justify="space-between"
          width="200px"
        >
          <button
            onClick={refetchUseGetUsers}
          >Get Users</button>
          <button
            onClick={toggleHideUsers}
          >Hide Users</button>
        </Flex>
      </Flex>
      {!hideUsers && 
        <Users
          {...{
            isLoading, 
            isFetching,
            isError, error,
            users
          }}
        />
      }
    </>
  );
}

export default App;
