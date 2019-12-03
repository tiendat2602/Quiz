module.exports = function() {
return {
	categories: ["html","css","javascript","bootstrap","jquery","xml"],
	html: [	{id:1,
			question:"What does HTML stand for?",
			option:["Hyperlinks and Text Markup Language",
					"Home Tool Markup Language",
					"Hyper Text Markup Language",
					"Hight Tech Mark Language"],
			answer:"Hyper Text Markup Language"},	
			{id:2,
			question:"Who is making the Web standards?",
			option:["The World Wide Web Consortium",
					"Google",
					"Mozilla",
					"Microsoft"],
			answer:"The World Wide Web Consortium"},
			{id:3,
			question:"Choose the correct HTML element for the largest heading:",
			option:["<h6>",
					"<heading>",
					"<h1>",
					"<head>"],
			answer:"<h1>"},
			{id:4,
			question:"What is the correct HTML element for inserting a line break?",
			option:["<break>",
					"<lb>",
					"<br>",
					"hr"],
			answer:"<br>"},
			{id:5,
			question:"What is the correct HTML for adding a background color?",
			option:["<background>yellow</background>",
					"<body bg='yellow'>",
					"<body style='background-color:yellow;'>",
					"<body background='yellow' >"],
			answer:"<body style='background-color:yellow;'>"},
			{id:6,
			question:"Choose the correct HTML element to define important text",
			option:["<i>",
					"<b>",
					"<important>",
					"<strong>"],
			answer:"<strong>"},
			{id:7,
			question:"Choose the correct HTML element to define emphasized text",
			option:["<em>",
					"<i>",
					"<italic>",
					"<pre>"],
			answer:"<em>"},
			{id:8,
			question:"What is the correct HTML for creating a hyperlink?",
			option:["<a url='http://www.w3schools.com'>W3Schools.com</a>",
					"<a href='http://www.w3schools.com'>W3Schools</a>",
					"<a name='http://www.w3schools.com'>W3Schools.com</a>",
					"<a>http://www.w3schools.com</a>"],
			answer:"<a href='http://www.w3schools.com'>W3Schools</a>"},
			{id:9,
			question:"Which character is used to indicate an end tag?",
			option:["^",
					"/",
					"<",
					"*"],
			answer:"/"},
			{id:10,
			question:"How can you open a link in a new tab/browser window?",
			option:["<a href='url' target='new'>",
					"<a href='url' target='_blank'>",
					"<a href='url' new>",
					"<link href='url target='new'>"],
			answer:"<a href='url' target='_blank'>"},
			{
				id:11,
				question:"Which of these elements are all <table> elements?",
				option:["<thead><body><tr>","<table><head><tfoot>","<table><tr><tt>","<table><tr><td>"],
				answer:"<table><tr><td>"
			},
			{
				id:12,
				question:"How can you make a numbered list?",
				option:["<list>","<ol>","<ul>","<dl>"],
				answer: "ol"
			},
			{
				id:13,
				question:"What is the correct HTML for making a checkbox?",
				option:["<input type='checkbox'>","<check>","<input type='check'>","<checkbox>"],
				answer:"<input type='checkbox'>"
			},
			{
				id:14,
				question:"What is the correct HTML for making a text input field?",
				option:["<textinput type='text'>","<textfield>","<input type='text'>","<input type='textfield'>"],
				answer:"<input type='text'>"
			},
			{
				id:15,
				question:"What is the correct HTML for making a drop-down list?",
				option:["<input type='list'>","<select>","<input type='dropdown'>","list"],
				answer:"<select>"
			},
			{
				id:16,
				question:"What is the correct HTML for making a text area?",
				option:["<input type='textbox'>","<input type='textarea'>","<textarea>","<div>"],
				answer:"<input type='textarea'>"
			},
			{
				id:17,
				question:"What is the correct HTML for inserting an image?",
				option:["<img alt='MyImage'>image.gif</img>","<image src='image.gif' alt='MyImage'>",
					"<img href='image.gif' alt='MyImage'>","<img href='image.gif' alt='MyImage'>"],
				answer:"<img href='image.gif' alt='MyImage'>"
			},
			{
				id:18,
				question:"What is the correct HTML for inserting a background image?",
				option:["<body bg='background.gif'>","<body style='background-image:url(background.gif)'>",
						"<background img='background.gif'>","<body background='background.gif'>"],
				answer:"<body style='background-image:url(background.gif)'>"
			},
			{
				id:19,
				question:"An <iframe> is used to display a web page within a web page?",
				option:["There is no such thing as an <iframe>","true","false","all above option is false"],
				answer:"true"
			},
			{
				id:20,
				question:"Which tag is comments start and comments end?",
				option:["< and />","<!-- and -->","/ and */", "{ and }"],
				answer:"<!-- and -->"
			},
			{
				id:21,
				question:"Which HTML element defines the title of a document?",
				option:["<meta>","<head>","<link>","<title>"],
				answer:"<title>"
			},
			{
				id:22,
				question:"Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
				option:["src","longdesc","alt","title"],
				answer:"alt"
			},
			{
				id:23,
				question:"Which doctype is correct for HTML5?",
				option:["<!DOCTYPE html>","<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 5.0//EN' 'http://www.w3.org/TR/html5/strict.dtd'>",
						"<!DOCTYPE HTML5>"," <!DOCTYPE type='HTML5'>"],
				answer:"<!DOCTYPE html>"
			},
			{
				id:24,
				question:"Which HTML element is used to specify a footer for a document or section?",
				option:["<footer>","<bottom>","<section>","<aside>"],
				answer:"<footer>"
			},
			{
				id:25,
				question:"What is the correct HTML element for playing video files?",
				option:["<video>","<movie>","<media>","<youtube>"],
				answer:"<video>"
			},
			{
				id:26,
				question:"What is the correct HTML element for playing audio files?",
				option:["<mp3>","<sound>","<audio>","<track>"],
				answer:"<audio>"
			},
			{
				id:27,
				question:"The HTML global attribute, 'contenteditable' is used to:",
				option:["Update content from the server","Specifies a context menu for an element. The menu appears when a user right-clicks on the element",
				"Return the position of the first found occurrence of content inside a string","Specify whether the content of an element should be editable or not"],
				answer:"Specify whether the content of an element should be editable or not"
			},
			{
				id:28,
				question:"In HTML, onblur and onfocus are:",
				option:["Style attributes","HTML elements","Event attributes","Special comments"],
				answer:"Event attributes"
			},
			{
				id:29,
				question:"Graphics defined by SVG is in which format?",
				option:["XML","HTML","CSS","SASS"],
				answer:"XML"
			},
			{
				id:30,
				question:"The HTML <canvas> element is used to:",
				option:["display database records","draw graphics","manipulate data in MySQL","create draggable elements"],
				answer:"draw graphics"
			},
			{
				id:31,
				question:"In HTML, which attribute is used to specify that an input field must be filled out?",
				option:["validate","placeholder","required","formvalidate"],
				answer:"required"
			},
			{
				id:32,
				question:"Which input type defines a slider control?",
				option:["search","slider","controls","range"],
				answer:"slider"
			},
			{
				id:33,
				question:"Which HTML element is used to display a scalar measurement within a range?",
				option:["<meter>","<range>","<gauge>","measure"],
				answer:"<range>"
			},
			{
				id:34,
				question:"Which HTML element defines navigation links?",
				option:["<nav>","<navigation>","<navigate>","<menu>"],
				answer:"<nav>"
			},
			{
				id:35,
				question:"In HTML, what does the <aside> element define?",
				option:["A navigation list to be shown at the left side of the page",
					"Content aside from the page content",
					"The ASCII character-set; to send information between computers on the Internet"],
				answer:"Content aside from the page content"
			},
			{
				id:36,
				question:"Which HTML element is used to specify a header for a document or section?",
				option:["<section>","<head>","<top>","<header>"],
				answer:"header"
			}
			],
	css: [	{
				id:1,
				question: "What does CSS stand for?",
				option: ["Computer Style Sheets",
				 		  "Creative Style Sheets",
				 		  "Cascading Style Sheets",
				 		  "Colorful Style Sheets"],
				answer: "Cascading Style Sheets"
			},
			{
				id:2,
				question:"What is the correct HTML for referring to an external style sheet?",
				option:["<link rel='stylesheet' type='text/css' href='mystyle.css'>",
						"<style src='mystyle.css'>","<stylesheet>mystyle.css</stylesheet>",
						"<script src='mystyle.css'>"],
				answer:"<link rel='stylesheet' type='text/css' href='mystyle.css'>"
			},
			{
				id:3,
				question:"Where in an HTML document is the correct place to refer to an external style sheet?",
				option:["In the <body> section","In the <head> section",
						"At the end of the document","In the meta element"],
				answer:"In the <head> section"
			},
			{
				id:4,
				question:"Which HTML tag is used to define an internal style sheet?",
				option:["<style>","<css>","<script>","<meta>"],
				answer:"<style>"
			},
			{
				id:5,
				question:"Which HTML attribute is used to define inline styles?",
				option:["style","font","class","styles"],
				answer:"style"
			},
			{
				id:6,
				question:"Which is the correct CSS syntax?",
				option:["{body;color:black;}","body:color=black;","body {color: black;}","{body:color=black;}"],
				answer:"body {color: black;}"
			},
			{
				id:7,
				question:"How do you insert a comment in a CSS file?",
				option:["// this is a comment //","' this is a comment","/* this is a comment */","// this is a comment"],
				answer:"/* this is a comment */"
			},
			{
				id:8,
				question:"Which property is used to change the background color?",
				option:["bgcolor","color","background-color","bg-color"],
				answer:"background-color"
			},
			{
				id:9,
				question:"How do you add a background color for all <h1> elements?",
				option:["h1.all {background-color:#FFFFFF;}","h1 {background-color:#FFFFFF;}",
						"all.h1 {background-color:#FFFFFF;}","all h1 {background-color:#FFFFFF}"],
				answer:"h1 {background-color:#FFFFFF;}"
			},
			{
				id:10,
				question:"Which CSS property is used to change the text color of an element?",
				option:["text-color","color","fgcolor","bgcolor"],
				answer:"color"
			},
			{
				id:11,
				question:"Which CSS property controls the text size?",
				option:["font-size","text-size","font-style","text-size"],
				answer:"font-size"
			},
			{
				id:12,
				question:"What is the correct CSS syntax for making all the <p> elements bold?",
				option:["p {font-weight:bold;}","<p style='text-size:bold;'>",
						"<p style='font-size:bold;'>","p {text-size:bold;}"],
				answer:"p {font-weight:bold;}"
			},
			{
				id:13,
				question:"How do you display hyperlinks without an underline?",
				option:["a {decoration:no-underline;}","a {underline:none;}",
						"a {text-decoration:no-underline;}","a {text-decoration:none;}"],
				answer:"a {text-decoration:none;}"
			},
			{
				id:14,
				question:"How do you make each word in a text start with a capital letter?",
				option:["text-transform:capitalize","You can't do that with CSS",
						"transform:capitalize","text-style:capitalize"],
				answer:"text-transform:capitalize"
			},
			{
				id:15,
				question:"Which property is used to change the font of an element?",
				option:["font-family","font-style","font-weight","font-size"],
				answer:"font-family"
			},
			{
				id:16,
				question:"How do you make the text bold?",
				option:["font:bold","style:bold","font-weight:bold","font-size:bold"],
				answer:"font-weight:bold"
			},
			{
				id:17,
				question:"How do you display a border like this:The top border = 10 pixels,bottom border = 5 pixels,left border = 20 pixels,right border = 1pixel?",
				option:["border-width:10px 1px 5px 20px;","border-width:10px 5px 20px 1px;",
						"border-width:10px 20px 5px 1px;","border-width:5px 20px 10px 1px;"],
				answer:"border-width:10px 1px 5px 20px;"
			},
			{
				id:18,
				question:"Which property is used to change the left margin of an element?",
				option:["indent","margin-left","padding-left","margin-top"],
				answer:"margin-left"
			},
			{
				id:19,
				question:"How do you make a list that lists its items with squares?",
				option:["list-style-type: square;","list: square;","list-type: square;","list-type:circle"],
				answer:"list-style-type: square"
			},
			{
				id:20,
				question:"How do you select an element with id 'demo'?",
				option:["#demo","demo","*demo",".demo"],
				answer:"#demo"
			},
			{
				id:21,
				question:"How do you select elements with class name 'test'?",
				option:["test","*test",".test","#test"],
				answer:".test"
			},
			{
				id:22,
				question:"How do you select all p elements inside a div element?",
				option:["div.p","div+p","div p","div > p"],
				answer:"div p"
			},
			{
				id:23,
				question:"How do you group selectors?",
				option:["Separate each selector with a space","Separate each selector with a plus sign",
						"Separate each selector with a comma","Separate each selector with a semi comma"],
				answer:"Separate each selector with a comma"
			},
			{
				id:24,
				question:"What is the default value of the position property?",
				option:["static","fixed","absolute","relative"],
				answer:"static"
			}
		],
	javascript: [{id:1,
				question: "Inside which HTML element do we put the JavaScript?",
				option: ["<scripting>","<script>","<js>","<javascript>"],
				answer: "<script>"}
				],
	bootstrap: [{id:1,
				question:"Which class provides a responsive fixed width container?",
				option:[".container-fixed",".container-fluid",".container",".row"],
				answer:".container"}
				],
	jquery: [{id:1,
			 question:"Which sign does jQuery use as a shortcut for jQuery?",
			 option: ["the % sign", "the $ sign","the ! sign","the ? sign"],
			 answer:"the $ sign"}
			],
	xml: [{id:1,
		 question:"What does XML stand for?",
		 option: ["Example Markup Language","X-Markup Language","eXtensible Markup Language","eXtra Modern Link"],
		 answer:"eXtensible Markup Language"}
		 ]
	}
}