import { Client } from "twitter-api-sdk";
import "dotenv/config"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { text } from "stream/consumers";

console.log("process", process.env);

const main = async () => {
  try {
    const client = new Client(process.env.BEARER_TOKEN!);
    const { data } = await client.users.findUserByUsername("ziakhan");

    if (!data) throw new Error("Couldn't find user");

    console.log("User ID: " + data?.id);
    console.log("User Name: " + data?.name);
    console.log("User Data: " + data);

  } catch (err: any) {
    
    // console.log("🚀 ~ index.ts:15 ~ main ~ err:", err);
    console.log("🚀 ~ index.ts:16 ~ main ~ err:", err?.error?.detail);
  }
};

main();
