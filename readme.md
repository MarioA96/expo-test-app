```bash
$ npx expo start
```

to install expo + appwrite

```bash
$ npx expo install react-native-appwrite react-native-url-polyfill
```

to initialize appwrite in your project

```javascript
import { Account, Client, ID } from "react-native-appwrite";

const client = new Client()
    .setProject("<PROJECT_ID>") // Your project ID
    .setPlatform("<PLATFORM ID>"); // Your Appwrite platform ID
```
