import React, { useState } from "react";
import { NFTStorage, File } from "nft.storage";

function App() {

  const [NFTstorag, setNFTstorag] = useState();
  var API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDRiRkU2QTFiNUEyODc0NjIzQWU3QTBlMmYyYTY1RkU3ZTZEM2JiMzMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjY1ODU0NjQ3OCwibmFtZSI6ImRocnV2TkZUIn0.Qzk70h7hI34_TpUdDbhMyHTSQizetvVnhukc1zpCx84"
  const client = new NFTStorage({ token: API_KEY })

  async function NFTstorageUploadfile(e) {
    var file = e.target.files[0];

    const metadata = await client.store({
      name: 'dhruv',
      description: 'This is in IPSF storage via NFT storage !',
      Examine: 'By Dhruv',
      image: file
    })
    console.log(metadata.url);
    setNFTstorag(file)

  }
  return (
    <>
      <div className="App">
        <h1>NFTstorage Uploadfile</h1>
        <input type='file' onChange={NFTstorageUploadfile}></input>
        {
          NFTstorag && (
            <div>
              <p>{NFTstorag.name}</p>
              <img src={URL.createObjectURL(NFTstorag)} width="200px"></img>

            </div>
          )
        }
      </div>

    </>

  )
}
export default App;