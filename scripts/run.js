const { default: axios } = require("axios");
const hre = require("hardhat");



  
async function main() {
    const HotelNFTContract = await hre.ethers.getContractFactory("ANFT");
    // const hotelNFT = await HotelNFTContract.deploy()
    // await hotelNFT.deployed()
    // console.log("HotelNFT deployed to:", hotelNFT.address);
    const hotelNFT =  HotelNFTContract.attach("0xD1F63f99F2324954Ae5D78d8a53Fe210f479655C")

    accounts = await ethers.getSigners()
    const [deployer] = accounts

    // console.log(deployer.address)
    // return

    const NFTMetadataBatchUpdaterContract = await hre.ethers.getContractFactory("NFTMetadataBatchUpdater");
    const nftMetadataBatchUpdater = await NFTMetadataBatchUpdaterContract.attach("0x930DeBC39816bFF1b84922AE120699967a0C5777")

    const bal = await hotelNFT.balanceOf(deployer.address)
    // console.log(bal)

    // return

    const metadataList = [
        "bafkreiaziirqysb5hnuyxmstxsqc5wnrdcsyfr65vwhado7hz7xscejw6a",
          "bafkreiaqa2cob4wjx2ynlnlyfqxhsg2htrtf6wuytdjzfr2vn7tit3stja",
          "bafkreib2p3natgoo4rcel4p7fayquoxbusxryffp257yjwujimejxe5pma",
          "bafkreiftxsofgyywj3n45fbc6g74fxvmxrgcadyytxox5q36ag5x4iwlt4",
          "bafkreifx7alo3hptbra7hqwcjwyff3ut4cxygbbqus3uysokz7eqymwus4",
          "bafkreiacfigj7cp54rkqu4tx3lxchwbwtvqyuy2by3umnkruvanucyft6i",
          "bafkreiclawxnkve4cszwctjsbuztrbciyzugce3vuyxrkx2jcqtynf2vdq",
          "bafkreietj5vwwsepip2c3dz2o7uajfjxjb4jichylytjkr3kvmm3j4vqeu",
          "bafkreif3qovz2kmq7ix7le3phhkf6as54abbgqemrl52gwgt227ijklotm",
          "bafkreiexdhco3pu5n65m7hnx474cfsmvvuqfzh6jrp3r76cbs7nvnyt4te",
          "bafkreig6hnzoobr5bdmrffdsng42jxs7d5rv7ogvx7meyfrjjlcrcj7ho4",
          "bafkreiglor547usgppjo4a6dpyjt3flghqqzznapgmkqdq7kp4ej7dgvxq",
          "bafkreibe5nb7nxiikbs6xmzpidkesd3a4bv4y4eqtijqjm3625pcsino7i",
          "bafkreidaaarhnckwquuv3vbpfav6yetssqbbg35qy3xo2u63v3pb4luaha",
          "bafkreickjhwoefnfw4pbb2drnmvaswy56oon7zz3qtilzqivwjuiw6akuu",
          "bafkreigvnlwp4uck2gocihbuphm4k34nuoz7nz2iv5zs4ugtgiz3wpfgaq",
          "bafkreibw2zb4qyg4nbtlo3a7p6a7u3l6ezr3isnpo5hzvxz2zlhogmj2a4",
          "bafkreih5vzx5wqhy2dgqfnsvzftpcijcrdkodmshzngsuuk6n2gfk5yepa",
          "bafkreidcmtktbhacevbcvkcwju6z3ci6pekbmizbyp5fvg5t3nbqdy55nm",
          "bafkreid4r5t46uhwp47xk4uhz3crsg7ei4dqwjxflnwvgmlnpivv274iny"
    ]

    for(let i = 0; i < metadataList.length; i++) {
        const tr = await hotelNFT.mint(deployer.address, metadataList[i])
        await tr.wait()
    }

    await hotelNFT.mint(deployer.address, "bafkreih27lvl7c2pl6jk7xy6lgi3b6tsydvhzh2ohcuebm254mf6srye6i")
    for(let i = 1; i < 20; i++) {
        const metadata = await hotelNFT.tokenURI(i)
     
       console.log('Token ID: ', i, 'Metadata: ', metadata)
    }
    // const metadata = await nftMetadataBatchUpdater.getMetadata(2)
    // console.log(metadata)
    // const nftMetadataBatchUpdater = await NFTMetadataBatchUpdaterContract.deploy(hotelNFT.address, deployer.address)
    // // await nftMetadataBatchUpdater.deployed()
    // console.log("NFTMetadataBatchUpdater deployed to:", nftMetadataBatchUpdater.address);
// 
    // console.log(deployer.address)

    // await hotelNFT.setTokenURI(1, "https://gateway.lighthouse.storage/ipfs/bafkreih27lvl7c2pl6jk7xy6lgi3b6tsydvhzh2ohcuebm254mf6srye6i")

    // const owner = await hotelNFT.ownerOf(1)
    // console.log(owner)

    // const resp = await axios.get('https://gateway.lighthouse.storage/ipfs/bafkreih27lvl7c2pl6jk7xy6lgi3b6tsydvhzh2ohcuebm254mf6srye6i')
    // console.log(resp.data)

    // const lighthouseList = [
    //     'bafkreih27lvl7c2pl6jk7xy6lgi3b6tsydvhzh2ohcuebm254mf6srye6i',
    //     'bafkreic7rzdyl4z2t55crszm5iguncn62expli6oc6twgfbdr6eespzhzu',
    //     'bafkreiabcumvjuu2bj5ctfhd5ao2ufgad7imvy3oysnjnxbowruafb2jtm',
    //     'bafkreib3pd6qm3zlxi6op5dikaxrng2tmpyo7npsaitq632mg23lrh5wpa',
    //     'bafkreidbpb3sny4fqidt55ot2ntmbxqevtvvdwoa3apfgoodyhylvvjb5m',
    //     'bafkreidbpb3sny4fqidt55ot2ntmbxqevtvvdwoa3apfgoodyhylvvjb5m'
    //   ]
    // for(let i = 0; i < lighthouseList.length; i++) {
    //     await hotelNFT.safeMint(
    //         deployer.address,
    //         lighthouseList[i]
    //     )
    // }

    // const bal = await hotelNFT.balanceOf(deployer.address)
    // for(let i = 0; i < bal; i++) {
    //     const tokenId = await hotelNFT.tokenOfOwnerByIndex(deployer.address, i)
    //     const tokenURI = await hotelNFT.tokenURI(tokenId)
    //     console.log(tokenURI)
    // }

    // const HotelNFT = await HotelNFTContract.deploy();
    // console.log("HotelNFT deployed to:", HotelNFT.address);

    // 0x5FbDB2315678afecb367f032d93F642f64180aa3



    // const hotelNFT = await HotelNFT.deploy(
    //     "0x514910771AF9Ca656af840dff83E8264EcF986CA", // LINK Token Address
    //     "0xYourOracleAddress", // Chainlink Oracle Address
    //     "0xYourJobId", // Job ID for HTTP GET
    //     ethers.utils.parseEther("0.1") // Fee in LINK
    // );

    // await hotelNFT.deployed();
    // console.log("HotelNFT deployed to:", hotelNFT.address);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
