import { useUser } from "../../hooks/useUser";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import GuestOnly from "../../components/auth/GuestOnly";

export default function AuthLayout() {

    const { user } = useUser();
    console.log(user);

    return (
        <GuestOnly>
            <StatusBar style="auto" />
            <Stack
                screenOptions={{ headerShown: false, animation: "none" }}
            />
        </GuestOnly>
    )

}
