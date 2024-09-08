import { BskyAgent } from "@atproto/api";

const agent = new BskyAgent({
  service: process.env.BSKY_SERVICE as string,
});
await agent.login({
  identifier: process.env.BSKY_USERNAME as string,
  password: process.env.BSKY_PASSWORD as string,
});

await agent.post({
  text: "Good night, everyone!",
});
