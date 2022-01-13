import { useState } from 'react'

// components
import { 
  Flex, 
  // Button 
} from 'mrt-components'
import { DemoConfig, Users, QueryStatus } from './components'

// rQuery
import { api } from './rQuery'

function App() {
  // state
  const [hideUsers, setHideUsers] = useState(false)
  const [throwRandomErrors, setThrowRandomErrors] = useState(false)

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

  return (
    <>
      <Flex width="100%" margin="10px 0">
        <Flex 
          column
          justify='center' 
          width="100%"
          border='2px solid blue'
          borderRadius="5px"
        >
          <div>REACT QUERY DEMO</div>
          <div>👀 Throttle your network speed to better see lifecycle 👀</div>
        </Flex>
      </Flex>
      <Flex>
        <DemoConfig 
          {...{
            throwRandomErrors, setThrowRandomErrors,
            hideUsers, setHideUsers
          }}
        />
      </Flex>
      <QueryStatus 
        {...{
          status,
          isLoading,
          isFetching,
          isError,
        }}
      />
      {!hideUsers && 
        <Users 
          {...{
            throwRandomErrors
          }}
        />
      }
    </>
  );
}

export default App;
