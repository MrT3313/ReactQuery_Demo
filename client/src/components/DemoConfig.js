// components
import { 
    Flex, 
} from 'mrt-components'
import { Switch } from '@mui/material';

const DemoConfig = ({
    throwRandomErrors, setThrowRandomErrors,
    hideUsers, setHideUsers
}) => {
    return (
        <Flex
            column
            justify="space-around"
            width="100%"
            borderRadius="5px"
            marginBottom="10px"
            border="2px solid red"
        >
            <Flex>Demo Configuration</Flex>
            <Flex 
                justify="space-around"
                width="100%"
            >
                <Flex>
                    <Flex>Throw Random Errors</Flex>
                    <Switch 
                        checked={throwRandomErrors}
                        onChange={() => {
                            setThrowRandomErrors(!throwRandomErrors)
                        }}
                    />
                </Flex>
                <Flex>
                    <button
                        onClick={() => setHideUsers(!hideUsers)}
                    >
                    {hideUsers ? "Show Users" : "Hide Users"}
                    </button>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default DemoConfig