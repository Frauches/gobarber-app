import React from 'react';
import { Button, View, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Button title="Sair" onPress={signOut} />
    </View>
  );
};

export default Dashboard;
