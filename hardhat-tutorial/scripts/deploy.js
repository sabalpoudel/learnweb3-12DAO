const { ethers } = require("hardhat");

// Address of the Crypto Dev NFT contract that you deployed in the previous module
const cryptoDevNFTContract = "0xF8c473Cfb243Eb5Fa7c58E409d82FA106d8087ec";

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
      value: ethers.utils.parseEther("0.1"),
    }
  );
  await cryptoDevsDAO.deployed();
  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);
}

// FakeNFTMarketplace deployed to:  0xE6a2DaDcb9E97549b7C9414a387e9A52E4A3d882
// CryptoDevsDAO deployed to:  0x93D2AD9b8B900755F5737522D9E11A96761510cD
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
