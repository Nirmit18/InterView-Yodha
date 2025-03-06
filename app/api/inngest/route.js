import { inngest } from "@/lib/inngest/client";
import { serve } from "inngest/next";
import { helloWorld } from "./function";


// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest ,
  functions: [
    // helloWorld,
  ],
});
