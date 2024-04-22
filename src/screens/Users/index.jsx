import { View } from "react-native";
import { useState } from "react";

import styles from "./styles";
import Title from "../../components/Title";

import axios from "axios"


export default function Users() {

  const [users, setUsers] = useState([]);

  const apiURL = process.env.REACT_PUBLIC_API_URL;

  const getUsers = async () => {
    try {
      const response = await axios.get(`${apiURL}/users`);
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Title title="Users" />


{
  users ? (
    users.map((user) => (
      <View key={user.id}>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
      </View>
    ))
  ) : (
    <Text>Loading...</Text>
  )
}

    </View>
  );
}
