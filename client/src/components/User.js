// components
import { 
  Flex, 
} from 'mrt-components'
import { QueryStatus } from '../components'

// react router
import { useParams } from 'react-router-dom'

// rQuery
import { api } from '../rQuery'

const User = () => {
  // hooks
  const { id } = useParams()
  const {
    status,
    isLoading,
    isError, error, 
    isFetching,
    isSuccess,
    data: userData1
  } = api.useGetUser(parseInt(id))
  
  const {
    data: userData2
  } = api.useGetUser(parseInt(id))

  return (
    <Flex column>
      <div>AN INDIVIDUAL USER USER</div>
      <QueryStatus 
        {...{
          status,
          isLoading,
          isFetching,
          isError,
        }}
      />
      <Flex>
        {userData1 && 
          userData1.id 
        }
      </Flex>
      <Flex>
        {userData2 && 
          userData2.id 
        }
      </Flex>
    </Flex>
  )
}

export default User