import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
export default function EditScreen() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Todo :{id}</Text>
    </View>
  );
}