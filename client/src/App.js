import { useState } from 'react'

// components
import { 
  Flex, 
  // Button 
} from 'mrt-components'
import { Users } from './components'

function App() {
  // state
  const [hideUsers, setHideUsers] = useState(false)

  // methods
  const toggleHideUsers = () => {
    setHideUsers(!hideUsers)
  }

  return (
    <>
      <Flex width="100%">
        <Flex justify='center' width="100%"
          border='2px solid blue'
          borderRadius="5px"
        >
          <div>REACT QUERY</div>
        </Flex>
      </Flex>
      <Flex justify='center' width="100%">
        <button
          onClick={toggleHideUsers}
        >
          {hideUsers ? "Show Users" : "Hide Users"}
        </button>
      </Flex>
      {!hideUsers && 
        <Users />
      }
    </>
  );
}

export default App;
