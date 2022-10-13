// const pinataSDK = require("@pinata/sdk");
// const fs = require("fs");
// require("dotenv").config;

// const pinataApiKey = process.env.PINATA_API_KEY;
// const pinataApiSecret = process.env.PINATA_API_SECRET;
// const pinata = pinataSDK(pinataApiKey, pinataApiSecret);

// const saveToIPFS = async (file) => {
//   console.log("Uploading to IPFS...");
//   let response;
//   const readableStreamForFile = fs.createReadStream(file);
//   try {
//     response = await pinata.pinFileToIPFS(readableStreamForFile);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
//   return response;
// };

/**Web3 Storage way */

// importing axios

import axios from "axios";

const apiToken = process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY;
const saveToIPFS = async (file) => {
  // create a new multipart form data
  const formData = new FormData();
  // add file to the form data
  formData.append("file", file);

  var config = {
    method: "post",
    url: "https://api.web3.storage/upload",
    headers: {
      Authorization: `Bearer ${apiToken}`,
      "Content-Type": "text/plain",
    },
    data: formData,
  };

  // Posting the form data to the IPFS API
  const response = await axios(config);
  // returning the CID
  return response.data.cid;
};

export default saveToIPFS;
