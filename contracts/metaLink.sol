//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;
contract MetaLink {
    struct User{
        string firstName;
        string lastName;
        string username;
        string email;
        string homeAddress;
        string dateOfBirth;
        string education;
        string workHistory;
        string phoneNumber;
        string jobTitle;
        string x;
        string instagram;
        string discord;
        string github;
        string linkedin;
        string info;
        string[] skills;
        string imageURL;
        bool exists;
        uint[] appliedJobs;
        Visibility visibility;
    }
    struct Visibility {
        bool education ;
        bool workHistory;
        bool phoneNumber;
        bool homeAddress;
        bool dateOfBirth;
    }
    struct BasicInfo{
        string firstName;
        string lastName;
        string email;
        string homeAddress;
        string dateOfBirth;
        string phoneNumber;
    }

    struct SocialLinks{
        string x;
        string instagram;
        string discord;
        string github;
        string linkedin;
    }
    struct ProfessionalInfo{
        string education;
        string workHistory;
        string jobTitle;
        string info;
        string[] skills;
        string imageURL;
    }
     //@dev   Mapping Harsh->{ firstname , lastname , jobs  ,....User}
   mapping(string => User) private users;
   // @dev  0Xef24....... => Harsh
   mapping(address => string) private addressToUsername;
   // @dev  uniqueness 
   mapping(string => bool) private usernames;

   modifier onlyUniqueUsername(string memory username) {
    require(!usernames[username], "username already exists");
     _;    
   

   }

   function createUser(
    string memory username,
    BasicInfo memory basicInfo ,
    ProfessionalInfo memory professionalInfo ,
     SocialLinks memory socialLinks ,
     Visibility memory visibility 

   ) public onlyUniqueUsername(username){
      User storage user =users[username];
      user.firstName=basicInfo.firstName;
      user.lastName=basicInfo.lastName;
      user.username=username;
      user.email=basicInfo.email;
      user.homeAddress=basicInfo.homeAddress;
      user.dateOfBirth=basicInfo.dateOfBirth;
      user.phoneNumber=basicInfo.phoneNumber;
      user.education=professionalInfo.education;
      user.workHistory=professionalInfo.workHistory;
      user.jobTitle=professionalInfo.jobTitle;
      user.x=socialLinks.x;
      user.instagram=socialLinks.instagram;
      user.discord=socialLinks.discord;
      user.github=socialLinks.github;
      user.linkedin=socialLinks.linkedin;
      user.info=professionalInfo.info;
      user.skills=professionalInfo.skills;
      user.imageURL=professionalInfo.imageURL;
      user.exists=true;
      user.visibility=visibility;
      usernames[username]=true;
      addressToUsername[msg.sender]=username;      

      
   }
   function editUser (
    string memory username ,
    BasicInfo memory basicInfo ,
    ProfessionalInfo memory professionalInfo ,
    SocialLinks memory socialLinks ,
    Visibility memory visibility

   )public {
    require(users[username].exists , "user does not exists with given username");
      User storage user =users[username];
      user.firstName=basicInfo.firstName;
      user.lastName=basicInfo.lastName;
      user.email=basicInfo.email;
      user.homeAddress=basicInfo.homeAddress;
      user.dateOfBirth=basicInfo.dateOfBirth;
      user.phoneNumber=basicInfo.phoneNumber;
      user.education=professionalInfo.education;
      user.workHistory=professionalInfo.workHistory;
      user.jobTitle=professionalInfo.jobTitle;
      user.x=socialLinks.x;
      user.instagram=socialLinks.instagram;
      
      user.discord=socialLinks.discord;
      user.github=socialLinks.github;
      user.linkedin=socialLinks.linkedin;
      user.info=professionalInfo.info;
      user.skills=professionalInfo.skills;
      user.imageURL=professionalInfo.imageURL;
      user.visibility=visibility;




   }

   function getUserByUsername(string memory  username) public view  returns( BasicInfo memory basicInfo ,
   ProfessionalInfo memory professionalInfo ,
   SocialLinks memory socialLinks ,
   Visibility memory visibility 
   ){
     require(users[username].exists ,"user does not exist with this username");
      User storage user=users[username];
      basicInfo=BasicInfo(
        user.firstName ,
        user.lastName,
        user.email ,
        user.homeAddress ,
        user.dateOfBirth,
        user.phoneNumber
      );
      professionalInfo =ProfessionalInfo(
        user.education,
        user.workHistory ,
        user.jobTitle ,
        user.info ,
        user.skills ,
        user.imageURL
      );
      visibility=user.visibility;
      return ( basicInfo , professionalInfo , socialLinks ,visibility );
   }


   function getUserByAddress(address userAddress) public view returns(
    BasicInfo memory basicInfo ,
    ProfessionalInfo memory professionalInfo ,
    SocialLinks memory socialLinks ,
    Visibility memory visibility

   ) 
   {
    string memory username=addressToUsername[userAddress];
    return getUserByUsername(username);
   }


   function getUsernameByAddress(address userAddress) public view returns(string memory)
   {
     return addressToUsername[userAddress];
   } 

   function setVisibility (
    string memory username ,
    bool education ,
    bool workHistory ,
    bool phoneNumber ,
    bool homeAddress ,
     bool dateOfBirth 
   )public {
    require(users[username].exists , "User not found " );
    User storage user =users[username];
    user.visibility.education=education ;
    user.visibility.workHistory=workHistory ;
    user.visibility.phoneNumber=phoneNumber ;
    user.visibility.homeAddress=homeAddress;
    user.visibility.dateOfBirth=dateOfBirth;


   }
   function getVisibility(string memory username)public view returns (Visibility memory )
    {
        require(users[username].exists , "user does not exists");
        return users[username].visibility;
    }
}
// Deployed address :  0xb965121E106167DAa47B4a1CE40dc59882905f59
//deployed smart contract using hardhat on BitTorent test network 