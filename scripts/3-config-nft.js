import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xa19dBB46DedFD8d401950573d34Ef0F694fa0b06",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Skd5 Village",
        description: "This NFT will give you access to SkDAO!",
        image: readFileSync("scripts/assets/skd.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()