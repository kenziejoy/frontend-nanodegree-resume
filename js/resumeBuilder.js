var bio
{
	"name" : "MacKenzie Rawcliffe",
	"role" : ["Designer", "Writer", "Web Master", "Administrator"],
	"contacts" :
	{
		"mobile": 2078528694,
		"email": "kenziejoy@gmail.com",
		"github": "kenziejoy",
		"twitter": "kenziejoy",
		"location": "Boston"
	},
		"welcomeMessage": "Ayuh",
		"skills": ["jumping","laughing","thinking"],
		"biopic": "http://assets.nydailynews.com/polopoly_fs/1.1557685.1387926752!/img/httpImage/image.jpg_gen/derivatives/article_970/161702057kk00196-15th-annua.jpg"
}

var education
{
	"schools":
	[
		{
			"name": "Tufts University",
			"location": "Medford, MA",
			"degree": "Bachelors",
			"majors": ["International Relations","Media Studies"],
			"dates": 2007,
			"url": "http://www.tufts.edu"
		},
		{
			"name": "University of Maine, Graduate School",
			"location": "Orono, ME",
			"degree": "Masters",
			"majors": ["International Relations","Public Administration"],
			"dates": 2015,
			"url": "http://www.maine.edu"
		}
	],
	"onlineCourses":
	{
		"title": "Nanodegree",
		"school": "Udacity",
		"date": 2015,
		"url": "http://www.udacity.com"
	}
}

var work
{
	"jobs":
	[
		{
			"employer": "Sony Pictures",
			"title": "Production Assistant, Wardrobe",
			"location": "Boston",
			"dates": "2015",
			"description": "nice"
		},
		{
			"employer": "AFF",
			"title": "Program Coordinator",
			"location": "Washington D.C",
			"dates": "2013-2015",
			"description": "bummer"
		}
	]
}

var projects
{
	"projects":
	[
		{
		"title": "everyday ambassador",
		"dates": "2014 - 2015",
		"description": "nice"
		},
		{
		"title": "Acadia Moon",
		"dates": "2015",
		"description": "nice"
		}
	]
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		// concat employer and title
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription
	}
}

displayWork();
