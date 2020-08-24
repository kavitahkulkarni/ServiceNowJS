// Confirm Initial P1 details are included if create is not major incident manager

// onSubmit on incident table


function onSubmit() {
	//Type appropriate comment here, and begin script below
	if (g_form.getValue("impact") == 1 && g_form.getValue("urgency") == 1 && !g_user.hasRoleExactly('major_inc_manager')) {
		
		var answer = confirm(g_user.firstName + ", please confirm all the mandatory fields are completed. Select ok/cencel");
		if (!answer) {
			g_form.addInfoMessage("Incident not submitted");
			g_form.showFieldMsg("category", "Major incident Base Field");
			g_form.showFieldMsg("cmdb_ci", "Major incident Base Field");
			g_form.showFieldMsg("assignment_group", "Major incident Base Field");
			g_form.showFieldMsg("short_description", "Major incident Base Field");
		}
		return answer;
	}
}

