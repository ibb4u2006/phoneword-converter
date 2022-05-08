import { Box, Button, Grid, Heading, Text } from "@kiwicom/orbit-components";
import * as React from "react";

interface IKeypadProps {}

const Keypad: React.FunctionComponent<IKeypadProps> = (props) => {
  return (
    <div className="keypad-section">
      <Box display="flex" direction="row" justify="between" align="center">
        <Heading as="h2">T9 Keypad</Heading>
      </Box>
      <div className="keypad">
        <Grid columns="repeat(3, 1fr)" rows="repeat(4, 1fr)" gap="10px">
          {[...new Array(12)].map((key, index) => {
            return (
              <React.Fragment key={index}>
                <Button>
                  <Heading as="h3">1</Heading>
                  <Text as="p">ABC</Text>
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
