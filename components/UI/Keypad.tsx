import {
  Box,
  Button,
  Grid,
  Heading,
  Text,
  ToastRoot,
} from "@kiwicom/orbit-components";
import { KEYPAD } from "data/keypad";
import * as React from "react";

interface IKeypadProps {
  handleClick: (e: any) => Promise<void>;
}

const Keypad: React.FunctionComponent<IKeypadProps> = ({ handleClick }) => {
  return (
    <div className="keypad-section">
      <Box display="flex" direction="row" justify="between" align="center">
        <Heading as="h2">T9 Keypad</Heading>
      </Box>
      <div className="keypad">
        <Grid columns="repeat(3, 1fr)" rows="repeat(4, 1fr)" gap="10px">
          {KEYPAD.map((key) => {
            return (
              <React.Fragment key={key.id}>
                <ToastRoot dismissTimeout={2000} placement="top-center" />
                <Button
                  onClick={() => {
                    const number = key.number;
                    handleClick(key.number.toString());
                  }}
                >
                  <Heading as="h3">{key.number}</Heading>
                  <Text as="p">{key.letters}</Text>
                </Button>
              </React.Fragment>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Keypad;
