const projectInfo = {
	ReactNative: [
		{
			Name: 'Pomodoro Timer',
			Technologies: 'React/React Native, Expo',
			Info: 'This timer makes it easy to implement the Pomorodo Technique, a time management method in which a period of work is broken down into recurring intervals of work time and break time.',
			URL: 'https://snack.expo.io/@chicorydove/pomodoro-timer',
			Platform: 'snack.expo.io'
		},
		{
			Name: 'Movie Searcher',
			Technologies: 'React/React Native, Expo',
			Info: 'This app lets you browse the <a href="http://www.omdbapi.com/" target="_blank">OMDb</a> (Online Movie Database) for film titles. From a list of results, click on a specific movie to view its details.',
			URL: 'https://snack.expo.io/@chicorydove/movie-search',
			Platform: 'snack.expo.io'
		}
	],

	API: [
		{ 
			Name: "URL Shortener",
			Technologies: "MongoDB, Node, Express",
			Info: 'This microservice, when passed /new/<url> as a parameter, returns a shortened URL that redirects to the original <url> parameter.',
			URL: "https://aboard-punishment.glitch.me/",
			Platform: "Glitch"
		},
		{
			Name: "Timestamp Microservice",
			Technologies: "Node, Express, Date parsing",
			Info: "Pass in /api/<date> as a parameter to receive the Unix and natural dates back as a JSON response.",
			URL: "https://shimmer-bean.glitch.me/",
			Platform: "Glitch"
		},
		{
			Name: "Image Search API",
			Technologies: "Node, Express, MongoDB, Bing Image API",
			Info: "Pass in URL parameters to receive information about the resulting Bing image search, paginate through the repsonses, or view a list of the most recent searches.",
			URL: "https://numerous-bucket-1.glitch.me/",
			Platform: "Glitch"
		},
		{
			Name: "File Metadata Microservice",
			Technologies: "Node, Express, Multer",
			Info: "Upload and submit a file to receive a JSON object containing the size of the file in bytes.",
			URL: "https://maddening-collar.glitch.me/",
			Platform: "Glitch"
		},
		{
			Name: "Request Header Parser",
			Technologies: "Node, Express",
			Info: "Pass in /api/ as a parameter to receive a JSON object containing information about your device.",
			URL: "https://useful-quince.glitch.me/",
			Platform: "Glitch"
		}
	], 

	FrontEnd: [
		{
			Name: "Markdown Previewer",
			Technologies: "JavaScript, HTML, CSS, React, Marked",
			Info: "Type markdown into the editor and see it rendered simultaneously.",
			URL: "https://eemoir.github.io/markdown/",
			Platform: "GitHub Pages"
		},
		{
			Name: "Quote Machine",
			Technologies: "JavaScript, HTML, CSS, React, Quotes on Design API",
			Info: "This page uses the <a href='https://quotesondesign.com/api-v4-0/' target='_blank'>Quotes on Design API</a> to generate random quotes, which the user can also tweet.",
			URL: "https://eemoir.github.io/quotes/",
			Platform: "GitHub Pages"
		},
		{
			Name: "Drum Machine",
			Technologies: "JavaScript, HTML, CSS, React",
			Info: "Click on the drum pads to produce different sounds.",
			URL: "https://eemoir.github.io/drums/",
			Platform: "GitHub Pages"
		},
		{
			Name: "To-Do List App",
			Technologies: "JavaScript, HTML, CSS",
			Info: "A basic, no-frills to-do list app.",
			URL: "https://codepen.io/chicorydove/full/GwERJw/",
			Platform: "Codepen"
		}

	],

	Fullstack: [
		{
			Name: "Book Reviews",
			Technologies: "Flask, PostgreSQL, SQLAlchemy, jQuery, passlib",
			Info: "Register and log in to search for and leave reviews and ratings of books by Title, Author or ISBN. Also includes an API that returns book data. For a more detailed description/instructions, see the README file <a href='https://github.com/eemoir/book-reviews/blob/master/README.md' target='_blank'>here</a>.",
			URL: "http://eemoir.pythonanywhere.com/",
			Platform: "PythonAnywhere"
		},
		{
			Name: 'Chat App',
			Technologies: 'Flask, PostgreSQL, SocketIO',
			Info: 'After selecting a unique username, the user can create and delete chat channels, which open in a pop-up window, in which they may chat with other users. Supports the sending of files over chat channels. Until the channel is deleted, it will display the 100 most recent messages.',
			URL: 'https://moir-chat-app-heroku.herokuapp.com/',
			Platform: 'Heroku'
		},
		/*{
			Name: 'Pizza Restaurant',
			Technologies: 'Django',
			Info: 'This timer makes it easy to implement the Pomorodo Technique, a time management method in which a period of work is broken down into recurring intervals of work time and break time.',
			URL: 'https://snack.expo.io/@chicorydove/pomodoro-timer',
			Platform: 'snack.expo.io'
		},*/
	]
}

export default projectInfo
