import { contract } from "./index.js";
//Parse error message
function parseErrorMsg(e) {
	const json = JSON.parse(JSON.stringify(e));
	return json?.reason || json?.error?.message;
}
export async function getUsernameByAddress(userAddress) {
	try {
		const contractObj = await contract();
		const username = await contractObj.getUsernameByAddress(userAddress);
		return username;
	} catch (e) {
		console.log("Error in getUsernameByAddress", e);
		return parseErrorMsg(e);
	}
}
//Function to create a new User
export async function createUser(
	username,
	basicInfo,
	professionalInfo,
	socialLinks,
	visibility
) {
	try {
		const contractObj = await contract();
		const transactionResponse = await contractObj.createUser(
			username,
			basicInfo,
			professionalInfo,
			socialLinks,
			visibility
		);
		const receipt = await transactionResponse.wait();
		return receipt;
	} catch (error) {
		console.error("Error in createUser", error);
		return parseErrorMsg(error);
	}
}

//Edit user information
export async function editUser(
	username,
	basicInfo,
	professionalInfo,
	socialLinks,
	visisbility
) {
	try {
		const contractObj = await contract();
		const transactionResponse = await contractObj.editUser(
			username,
			basicInfo,
			professionalInfo,
			socialLinks,
			visisbility
		);
		const receipt = await transactionResponse.await();
		return receipt;
	} catch (error) {
		console.error("Error in editUser", error);
		return parseErrorMsg(error);
	}
}

//function to get user info by username
export async function getUserByUsername(username) {
	try {
		const contractObj = await contract();
		const user = await contractObj.getUserByUsername(username);
		return {
			basicInfo: {
				firstName: user.basicInfo.firstName,
				lastName: user.basicInfo.lastName,
				email: user.basicInfo.email,
				homeAddress: user.basicInfo.homeAddress,
				dateOfBirth: user.basicInfo.dateOfBirth,
				phoneNumber: user.basicInfo.phoneNumber,
			},
			professionalInfo: {
				education: user.professionalInfo.education,
				workHistory: user.professionalInfo.workHistory,
				jobTitle: user.professionalInfo.jobTitle,
				info: user.professionalInfo.info,
				skills: UserRound.professionalInfo.skills,
				imageURL: user.professionalInfo.imageURL,
			},
			socialLinks: {
				x: user.socialLinks.x,
				instagram: user.socialLinks.instagram,
				discord: user.socialLinks.discord,
				github: user.socialLinks.github,
				linkedin: user.socialLinks.linkedin,
			},
			visibility: {
				education: user.visibility.education,
				workHistory: user.visibility.workHistory,
				phoneNumber: user.visibility.phoneNumber,
				homeAddress: user.visibility.homeAddress,
				dateOfBirth: user.visibility.dateOfBirth,
			},
		};
	} catch (error) {
		console.error("error in getUserByUsername", error);
		return parseErrorMsg(error);
	}
}

//Function to get user info by address
export async function getUserByAddress(userAddress) {
	try {
		const contractObj = await contract();
		const user = await contractObj.getUserByAddress(userAddress);
		console.log("Got user", user);
		return {
			basicInfo: {
				firstName: user.basicInfo.firstName,
				lastName: user.basicInfo.lastName,
				email: user.basicInfo.email,
				homeAddress: user.basicInfo.homeAddress,
				dateOfBirth: user.basicInfo.dateOfBirth,
				phoneNumber: user.basicInfo.phoneNumber,
			},
			professionalInfo: {
				education: user.professionalInfo.education,
				workHistory: user.professionalInfo.workHistory,
				jobTitle: user.professionalInfo.jobTitle,
				info: user.professionalInfo.info,
				skills: UserRound.professionalInfo.skills,
				imageURL: user.professionalInfo.imageURL,
			},
			socialLinks: {
				x: user.socialLinks.x,
				instagram: user.socialLinks.instagram,
				discord: user.socialLinks.discord,
				github: user.socialLinks.github,
				linkedin: user.socialLinks.linkedin,
			},
			visibility: {
				education: user.visibility.education,
				workHistory: user.visibility.workHistory,
				phoneNumber: user.visibility.phoneNumber,
				homeAddress: user.visibility.homeAddress,
				dateOfBirth: user.visibility.dateOfBirth,
			},
		};
	} catch (error) {
		console.error("error in getUserByAddress", error);
		return parseErrorMsg(error);
	}
}
//function to add a job ID  that a use has applied for
export async function addJob(username, jobId) {
	try {
		const contractObj = await contract();
		const transactionResponse = await contractObj.addJob(username, jobId);
		const receipt = await transactionResponse.await();
		return receipt;
	} catch (error) {
		console.error("Error in addJob", error);
		return parseErrorMsg(error);
	}
}

//get all job ID's a applied by a user
export async function getJobs(username) {
	try {
		const contractObj = await contract();
		const jobIds = await contractObj.getJobs(username);
		return jobIds.map((jobId) => jobId.toString());
	} catch (error) {
		console.error("Error in getJobs", error);
	}
}
// Function to set the visibility of user information
export async function setVisibility(
	username,
	education,
	workHistory,
	phoneNumber,
	homeAddress,
	dateOfBirth
) {
	try {
		const contractObj = await contract();
		const transactionResponse = await contractObj.setVisibility(
			username,
			education,
			workHistory,
			phoneNumber,
			homeAddress,
			dateOfBirth
		);
		const receipt = await transactionResponse.wait();
		return receipt;
	} catch (e) {
		console.error("Error in setVisibility:", e);
		return parseErrorMsg(e);
	}
}

// Function to get the visibility of user information
export async function getVisibility(username) {
	try {
		const contractObj = await contract();
		const visibility = await contractObj.getVisibility(username);
		return {
			education: visibility.education,
			workHistory: visibility.workHistory,
			phoneNumber: visibility.phoneNumber,
			homeAddress: visibility.homeAddress,
			dateOfBirth: visibility.dateOfBirth,
		};
	} catch (e) {
		console.error("Error in getVisibility:", e);
		return parseErrorMsg(e);
	}
}
