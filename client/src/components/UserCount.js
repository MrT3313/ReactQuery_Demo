// components
import { 
  Flex, 
} from 'mrt-components'

// rQuery
import { api } from '../rQuery_provider'

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
    isSuccess ? (
      <Flex marginRight="10px">
        {`There are ${users.length} users 🎉`}
      </Flex>    
    ) : (
      <Flex marginRight="10px">
        {`I wonder how many users there are?🤔`}
      </Flex>      
    )
  )
}

export default UserCount