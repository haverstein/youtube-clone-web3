import { createReactClient } from "@livepeer/react";
import { studioProvider } from "livepeer/providers/studio";

const livepeerApiKey = process.env.NEXT_PUBLIC_LIVEPEER_API_KEY;
const LivePeerClient = createReactClient({
  provider: studioProvider({ apiKey: livepeerApiKey }),
});

export default LivePeerClient;
