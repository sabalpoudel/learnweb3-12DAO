const { ethers } = require("hardhat");

// Address of the Crypto Dev NFT contract that you deployed in the previous module
const cryptoDevNFTContract = "0x930b247311A551f2979062C09337F1396Bd0534E";

async function main() {
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();
  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);
  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNftMarketplace.address,
    cryptoDevNFTContract,
    {
      value: ethers.utils.parseEther("0.01"),
    }
  );
  await cryptoDevsDAO.deployed();
  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);
}

// FakeNFTMarketplace deployed to:  0xD2174a32966F9985be3d40b5e238b70a4e484a6C
// CryptoDevsDAO deployed to:  0xA9F4C79B6E50F5E718aF484b54a686860e8eb4f6
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
