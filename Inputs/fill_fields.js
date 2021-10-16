function(e, strRowValues){
	var strFirstName = strRowValues.split("|")[0];
	var strLastName = strRowValues.split("|")[1];
	var strCompanyName = strRowValues.split("|")[2];
	var strRoleInCompany = strRowValues.split("|")[3];
	var strAddress = strRowValues.split("|")[4];
	var strEmail = strRowValues.split("|")[5];
	var strPhoneNumber = strRowValues.split("|")[6];
	
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