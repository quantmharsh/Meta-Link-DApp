const { expect } = require("chai");
const hre = require("hardhat");

describe("MetaLink", function () {
  let metaLink;
  let owner, user1, user2;
  //for each test re run the smart contract
  beforeEach(async function () {

    [owner, user1, user2] = await hre.ethers.getSigners();
    const MetaLink = await hre.ethers.getContractFactory("MetaLink");
    metaLink = await MetaLink.deploy();
    await metaLink.deployed();

  });

  it("Should create a  new user", async function () {

    const basicInfo = {
      firstName: "Harsh",
      lastName: "Srivastava",
      email: "srivastavah240@gmail.com",
      homeAddress: "sa 16/12",
      dateOfBirth: "2001-04-18",
      phoneNumber: "7905820323",
    };
    const professionalInfo = {
      education: "VIT Vellore",
      workHistory: "TCS , Mediways",
      jobTitle: "System Engineer",
      info: "Experienced WEB3 Developer",
      skills: ["Solidity", "Javascript"],
      imageURL: "http://example.com/image.jpg",

    };

    const socialLinks = {
      x: "https://x.com/HarshSr11377363",
      instagram: "https://www.instagram.com/harsh_srivastava.ig/",
      github: "https://github.com/quantmharsh",
      discord: "harsh2654"
    };
    const visibility = {
      education: true,
      workHistory: true,
      phoneNumber: true,
      homeAddress: true,
      dateOfBirth: true,
    };
    await metaLink.createUser(
      "quantamharsh",
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    const user = await metaLink.getUserByUsername('quantamharsh');
    expect(user.basicInfo.firstName).to.equal("Harsh");
    expect(user.basicInfo.lastName).to.equal("Srivastava");
    expect(user.basicInfo.email).to.equal("srivastavah240@gmail.com");
  });
  it("should edit an existing user", async function () {

    const basicInfo = {
      firstName: "Harsh",
      lastName: "Srivastava",
      email: "srivastavah240@gmail.com",
      homeAddress: "sa 16/12",
      dateOfBirth: "2001-04-18",
      phoneNumber: "7905820323",
    };
    const professionalInfo = {
      education: "VIT Vellore",
      workHistory: "TCS , Mediways",
      jobTitle: "System Engineer",
      info: "Experienced WEB3 Developer",
      skills: ["Solidity", "Javascript"],
      imageURL: "http://example.com/image.jpg",

    };

    const socialLinks = {
      x: "https://x.com/HarshSr11377363",
      instagram: "https://www.instagram.com/harsh_srivastava.ig/",
      github: "https://github.com/quantmharsh",
      discord: "harsh2654"
    };
    const visibility = {
      education: true,
      workHistory: true,
      phoneNumber: true,
      homeAddress: true,
      dateOfBirth: true,
    };
    await metaLink.createUser(
      "quantamharsh",
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    basicInfo.firstName = "Harshit";
    basicInfo.lastName = "kumar";
    professionalInfo.jobTitle = "Product Manager";
    await metaLink.editUser(
      "quantamharsh",
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    const user = await metaLink.getUserByUsername("quantamharsh");
    expect(user.basicInfo.firstName).to.equal("Harshit");
    expect(user.basicInfo.lastName).to.equal("kumar");
    expect(user.professionalInfo.jobTitle).to.equal("Product Manager");

  });
  it("should fetch user by address", async function(){
    const basicInfo = {
      firstName: "Harsh",
      lastName: "Srivastava",
      email: "srivastavah240@gmail.com",
      homeAddress: "sa 16/12",
      dateOfBirth: "2001-04-18",
      phoneNumber: "7905820323",
    };
    const professionalInfo = {
      education: "VIT Vellore",
      workHistory: "TCS , Mediways",
      jobTitle: "System Engineer",
      info: "Experienced WEB3 Developer",
      skills: ["Solidity", "Javascript"],
      imageURL: "http://example.com/image.jpg",

    };

    const socialLinks = {
      x: "https://x.com/HarshSr11377363",
      instagram: "https://www.instagram.com/harsh_srivastava.ig/",
      github: "https://github.com/quantmharsh",
      discord: "harsh2654"
    };
    const visibility = {
      education: true,
      workHistory: true,
      phoneNumber: true,
      homeAddress: true,
      dateOfBirth: true,
    };

    await metaLink.connect(user1).createUser(
      "quantamharsh",
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
    const user=await metaLink.connect(user1).getUserByAddress(user1.address);
    expect(user.basicInfo.firstName).to.equal("Harsh");
    expect(user.basicInfo.lastName).to.equal("Srivastava");
    expect(user.basicInfo.email).to.equal("srivastavah240@gmail.com");

    
  });

  it("should ensure the username is unique",async function(){
    const basicInfo = {
      firstName: "Harsh",
      lastName: "Srivastava",
      email: "srivastavah240@gmail.com",
      homeAddress: "sa 16/12",
      dateOfBirth: "2001-04-18",
      phoneNumber: "7905820323",
    };
    const professionalInfo = {
      education: "VIT Vellore",
      workHistory: "TCS , Mediways",
      jobTitle: "System Engineer",
      info: "Experienced WEB3 Developer",
      skills: ["Solidity", "Javascript"],
      imageURL: "http://example.com/image.jpg",

    };

    const socialLinks = {
      x: "https://x.com/HarshSr11377363",
      instagram: "https://www.instagram.com/harsh_srivastava.ig/",
      github: "https://github.com/quantmharsh",
      discord: "harsh2654"
    };
    const visibility = {
      education: true,
      workHistory: true,
      phoneNumber: true,
      homeAddress: true,
      dateOfBirth: true,
    };
    await metaLink.createUser(
      "quantamharsh",
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );

    await expect(metaLink.connect(user2).createUser(
      "quantamharsh",
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    )).to.be.revertedWith("username already exists");
  });

  it("Should set and get visibility settings",async function(){

    const basicInfo = {
      firstName: "Harsh",
      lastName: "Srivastava",
      email: "srivastavah240@gmail.com",
      homeAddress: "sa 16/12",
      dateOfBirth: "2001-04-18",
      phoneNumber: "7905820323",
    };
    const professionalInfo = {
      education: "VIT Vellore",
      workHistory: "TCS , Mediways",
      jobTitle: "System Engineer",
      info: "Experienced WEB3 Developer",
      skills: ["Solidity", "Javascript"],
      imageURL: "http://example.com/image.jpg",

    };

    const socialLinks = {
      x: "https://x.com/HarshSr11377363",
      instagram: "https://www.instagram.com/harsh_srivastava.ig/",
      github: "https://github.com/quantmharsh",
      discord: "harsh2654"
    };
    const visibility = {
      education: true,
      workHistory: true,
      phoneNumber: true,
      homeAddress: true,
      dateOfBirth: true,
    };
    await metaLink.createUser(
      "quantamharsh",
      basicInfo,
      professionalInfo,
      socialLinks,
      visibility
    );
  await metaLink.setVisibility("quantamharsh",false , false , false ,false ,false );

  const updatedVisibility=await metaLink.getVisibility("quantamharsh");
 expect(updatedVisibility.education).to.equal(false);
 expect(updatedVisibility.workHistory).to.equal(false);
 expect(updatedVisibility.phoneNumber).to.equal(false);
 expect(updatedVisibility.homeAddress).to.equal(false);
 expect(updatedVisibility.dateOfBirth).to.equal(false);
  });







})
