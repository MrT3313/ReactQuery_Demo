// components
import { 
  Flex, 
  // Button 
} from 'mrt-components'

const QueryStatus = ({
  status,
  isLoading,
  isFetching,
  isError,
}) => {
return (
  <Flex 
    column
    justify="center"
    border="2px solid green"
    width="100%"
    marginBottom="10px"
    paddingBottom="5px"
    borderRadius="5px"
  >
    <Flex
      marginBottom="5px"
    >
      Query Status
    </Flex>
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
        <div>TRUE</div>
      ) : (
        <div>FALSE</div>
      )}
    </Flex>
  </Flex>
)
}

export default QueryStatus