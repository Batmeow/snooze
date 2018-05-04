/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information how you can configurate this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "", "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	language: "en",
	timeFormat: 24,
	units: "imperial",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			config: {
				timezone: 'America/Los_Angeles',
				timeFormat: '12',
				showPeriod: false
			},
		},
		{
			module: 'MMM-AlarmClock',
			position: 'top_right',
			config: {
				alarms: [
					{ time: "23:30", days: [1,3], title: "Class", message: "Time to head out!" }
					{ time: "07:00", days: [1,2,3,4,5], title: "Work", message: "Don't be Late!" }
				],
				touch: true
			}
		},
		// {
		// 	module: "calendar",
		// 	header: "US Holidays",
		// 	position: "top_left",
		// 	config: {
		// 		calendars: [
		// 			{
		// 				symbol: "calendar-check-o ",
		// 				url: "webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics"
		// 			}
		// 		]
		// 	}
		// },
		{
			module: 'MMM-Carousel',
			config: {
				transitionInterval: 10000,
				ignoreModules: ['clock', 'MMM-AlarmClock'],
				mode: 'slides',
				slides: [
					['currentweather', 'weatherforecast'],
					['newsfeed']
				]
			}
		},
		{
			module: "currentweather",
			position: "bottom_left",
			config: {
				location: "Los Angeles",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "867e131c071180125bd88b996c21d001",
				showFeelsLike: false,
				roundTemp: true
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_right",
			header: "Weather Forecast",
			config: {
				location: "Monterey,us",
				locationID: "",  //ID from http://www.openweathermap.org/help/city_list.txt
				appid: "867e131c071180125bd88b996c21d001",
				maxNumberOfDays: 2
			}
		},
		{
			module: "newsfeed",
			position: "bottom_left",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				updateInterval: 30000,
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
