// components
import { 
  Flex, 
} from 'mrt-components'

// rQuery
import { api } from '../rQuery'

const UserCount = () => {
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
    <Flex marginBottom="10px">
      {isSuccess ? (
        <Flex marginRight="10px">
          {`There are ${users.length} users 🎉`}
        </Flex>    
      ) : (
        <Flex marginRight="10px">
          {`I wonder how many users there are?🤔`}
        </Flex>      
      )}
    </Flex>
  )
}

export default UserCount