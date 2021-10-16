function(e, strRowValues){
	const rowValues = strRowValues.split("|")
	var strFirstName = rowValues[0];
	var strLastName = rowValues[1];
	var strCompanyName = rowValues[2];
	var strRoleInCompany = rowValues[3];
	var strAddress = rowValues[4];
	var strEmail = rowValues[5];
	var strPhoneNumber = rowValues[6];
	
	var elemLabels = Array.from(document.getElementsByTagName("label"));

	for(var i = 0; i < elemLabels.length; i++){
		switch(elemLabels[i].textContent){
			case "First Name":
					elemLabels[i].nextSibling.value = strFirstName;
			break;
			case "Last Name":
					elemLabels[i].nextSibling.value = strLastName;
			break;
			case "Email":
					elemLabels[i].nextSibling.value = strEmail;
			break;
			case "Address":
					elemLabels[i].nextSibling.value = strAddress;
			break;
			case "Phone Number":
					elemLabels[i].nextSibling.value = strPhoneNumber;
			break;
			case "Company Name":
					elemLabels[i].nextSibling.value = strCompanyName;
			break;
			case "Role in Company":
					elemLabels[i].nextSibling.value = strRoleInCompany;
			break;
		}
	}
	document.getElementsByClassName("btn uiColorButton")[0].click();
}