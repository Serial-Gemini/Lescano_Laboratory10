
import { View, Text, Image } from "react-native";

export default function ProfilePage() {
  return (
    <View className="flex-1 bg-background justify-center items-center px-6">

      <Image
        source={require("../assets/images/profile.jpg")}
        className="w-28 h-28 rounded-full"
      />

      <Text className="text-white text-2xl font-bold mt-5">
        Waylon Chester Lescano
      </Text>

      <Text className="text-purple-300 mt-2">
        DCIT 26
      </Text>

      <Text className="text-gray-400 text-center mt-4">
        Welcome to my Gemini Movie profile. Ughh
      </Text>

    </View>
  );
}
