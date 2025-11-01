import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
    .setProject("<PROJECT-ID>")
    .setPlatform("PROJECT-ULR-TO-PLATFORM")
    .setEndpoint("PROJECT-ENDPOINT");

export const account = new Account(client);
export const avatars = new Avatars(client);
