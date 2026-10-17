
import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const UserProfile = React.memo(
  function UserProfile({ name }: { name: string }) {
    console.log("UserProfile rendered");

    return <Text>User: {name}</Text>;
  }
);

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 40 }}>
      <Text>Count: {count}</Text>

      <Button
        title="Increase"
        onPress={() => setCount(count + 1)}
      />

      <UserProfile name="raju" />
    </View>
  );
}


//Observe the console:
//- Press Increase counter: the parent renders, but the child can skip rendering because name is still "Raj".
//- Press Change name: the parent renders and the child renders because name changes to "Sam".