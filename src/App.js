import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Button onClick={signOut}>Sign Out</Button>
      <Card>
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      
    </View>
  );
}

export default withAuthenticator(App);