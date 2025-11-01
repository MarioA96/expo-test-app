import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client()
    .setProject("68f30d3a0002ba782b4e")
    .setPlatform("dev.personal.shelfie")
    .setEndpoint("https://sfo.cloud.appwrite.io/v1");

export const account = new Account(client);
export const avatars = new Avatars(client);

// user@domain.com
// test12345test