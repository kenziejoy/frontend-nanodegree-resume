var bio = {
	'name' : 'MacKenzie Rawcliffe',
	'role' : [' Designer', ' Writer', ' Administrator'],
	'contacts' : {
		'mobile' : '207 . 852 . 8694',
		'email' : 'kenziejoy@gmail.com',
		'github' : 'kenziejoy',
		'twitter' : '@kenziejoy',
		'location' : 'Boston'
	},
	'welcomeMessage' : 'Mainer extrodinaire. Currently living in Boston working on her coding and costume skills. Looking to start larping and move to Seattle, whichever comes first.',
	'skills' : [' jumping','    laughing','    thinking','    rump shaking'],
	'biopic' :  'http://i0.wp.com/everydayambassador.org/wp-content/uploads/2012/05/MacKenzie_Rawcliffe1.png?resize=150%2C150'
};
bio.display = function() {
	//Display name and role
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	$('#header').prepend(formattedName + formattedRole);

	//Display contacts
	var formattedMobile = HTMLmobile.replace('%data%',  bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedLocation);

	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedLocation);

	//Display Picture and Message
	var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
	$('#header').append(formattedBiopic);
	$('#header').append(formattedWelcomeMsg);

	//Display skills
		 if (bio.skills) {
			$("#header").append(HTMLskillsStart);
			for(i in bio.skills){
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);}
		 }
};
bio.display();

var work = {
	'jobs':
	[
		{
			'employer': 'Sony Pictures',
			'title': 'Production Assistant, Wardrobe',
			'location': 'Boston',
			'dates': '2015',
			'description': 'GSD for life'
		},
		{
			'employer': 'AFF',
			'title': 'Program Coordinator',
			'location': 'Washington D.C',
			'dates': '2013-2015',
			'description': 'Doing everything and doing it right.'
		}
	]
};
work.display = function() {
	for (job in work.jobs) {
		$('#workExperience').append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$('.work-entry:last').append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription)
	}
};
work.display();

var projects = {
	'projects':
	[
		{
		'title': 'Everyday Ambassador',
		'dates': '2014 - 2015',
		'description': 'Web Master for the Everyday Ambassador project that seeks to connect people in a digital world.'
		},
		{
		'title': 'Acadia Moon',
		'dates': '2015',
		'description': 'An Imagination Game Company'
		}
	]
};
projects.display = function() {
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);
	}
};
projects.display();

var education = {
	'schools':
	[
		{
			'name': 'Tufts University',
			'location': 'Medford, MA',
			'degree': 'Bachelors',
			'majors': [' International Relations',' Media Studies'],
			'dates': 2007,
			'url': 'http://www.tufts.edu'
		},
		{
			'name': 'University of Maine, Graduate School',
			'location': 'Orono, ME',
			'degree': 'Masters',
			'majors': [' International Relations',' Public Administration'],
			'dates': 2012,
			'url': 'http://www.maine.edu'
		}
	],
	'onlineCourses':
		{
		'title': 'Nanodegree',
		'school': 'Udacity',
		'date': 2015,
		'url': 'http://www.udacity.com'
		}
};
education.display = function() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
		$('.education-entry:last').append(formattedName);

		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
		$('.education-entry:last').append(formattedLocation);

		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
		$('.education-entry:last').append(formattedDegree);

		var formattedMajors = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
		$('.education-entry:last').append(formattedMajors);

		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
		$('.education-entry:last').append(formattedDates);
	}
	for (onlinecourse in education.onlinecourses) {
		$('#education').append(HTMLonlineClasses);

		var formattedOnlinetitle = HTMLonlineTitle.replace('%data%', education.onlinecourse[onlinecourse].title);
		$('.education-entry:last').append(formattedOnlinetitle);

		var formattedOnlineschool = HTMLonlineSchool.replace('%data%', education.onlinecourse[onlinecourse].school);
		$('.education-entry:last').append(formattedOnlineschool);

		var formattedOnlinedates = HTMLonlineDates.replace('%data%', education.onlinecourse[onlinecourse].dates);
		$('.education-entry:last').append(formattedOnlinedates);
	}
};
education.display();

function locationizer(work_obj) {
	var locationArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}
	return locationArray;
};

$('#mapDiv').append(googleMap);
