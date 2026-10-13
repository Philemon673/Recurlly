import { Link } from 'expo-router'
import { View, Text } from 'react-native'

const SignIn = () => {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text>SignIn</Text>
            <Link href="/(auth)/sign-in">SignIn</Link>
        </View>
    )
}

export default SignIn