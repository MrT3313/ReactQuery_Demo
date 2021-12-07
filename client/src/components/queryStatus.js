// components
import { 
  Flex, 
  // Button 
} from 'mrt-components'

// rQuery
import { api } from '../rQuery_provider'

const QueryStatus = ({
  status,
  isLoading,
  isFetching,
  isError,
}) => {
return (
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
</Flex>
)
}

export default QueryStatus