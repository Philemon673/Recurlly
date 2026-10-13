import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary p-4 text-white">
        Go to onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary p-4 text-white">
        Go to sign in
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded bg-primary p-4 text-white">
        Go to sign up
      </Link>

      <Link href="/subscriptions/spotify">Spotify Subscription</Link>
      <Link
        href={{
          pathname: "subscriptions/[id]",
          params: { id: "claude" },
        }}
      >
        Claude max Subscription
      </Link>
    </View>
  );
}
