 /*MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",			// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					  		// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "zh-cn",
	locale: "zh-cn",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",

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
			position: "top_left"
		},
		{
			module: "calendar",
			header: "CN Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
                        url: "https://p48-calendars.icloud.com/holidays/cn_zh.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Beijing",
				locationID: "1816670", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                apiKey: "f8735a60d6c8c178648f28b5c1bc1e12"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
                location: "Beijing",
                locationID: "1816670", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
                apiKey: "f8735a60d6c8c178648f28b5c1bc1e12"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
                        title: "中国新闻网",
                        url: "https://www.chinanews.com.cn/rss/scroll-news.xml",
                        encoding: "UTF-8" //ISO-8859-1
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
        },
        {
            module: 'voicecontrol',
            position: 'upper_third',
            config: {
                models: [
                    {
                        //keyword: "playMusic",   // keyword 
                        description: "你可以对我说",
                        //file: "playMusic.pmdl", // trained model file name
                        //message: "PLAY_MUSIC"   // notification message that's broadcast in the MagicMirror app
                    },
                    {
                        //keyword: "remainder",
                        description: "'今天下午三点提醒我取快递'",
                        //file: "remainder.pmdl",
                        //message: "remainder"
                    },
                    {
                        //keyword: "weather",
                        description: "'今天北京天气怎么样'",
                        //file: "weather.pmdl",
                        //message: "weather"
                    },
                    {
                       // keyword: "playMusic",
                        description: "'播放本地音乐'",
                       // file: "playMusic.pmdl", // trained model file
                        //message: "PLAY_MUSIC"
                    },
                    {
                        // keyword: "playMusic",
                        description: "...",
                        // file: "playMusic.pmdl", // trained model file
                        //message: "PLAY_MUSIC"
                    },
                ]
            }
        },
		{
			module: 'MMM-Face-Reco-DNN',
			config: {
			  // Logout 15 seconds after user was not detected any more
			  // If they are detected within this period, the delay will start again
			  logoutDelay: 15000,
			  // How often the recognition starts in milliseconds
			  // With a Raspberry Pi 3+ it works well every 2 seconds
			  checkInterval: 2000,
			  // Module set used for when there is no face detected ie no one is in front of the camera
			  noFaceClass: 'noface',
			  // Module set used for when there is an unknown/unrecognised face detected
			  unknownClass: 'unknown',
			  // Module set used for when there is a known/recognised face detected
			  knownClass: 'known',
			  // Module set used for strangers and if no user is detected
			  defaultClass: 'default',
			  // Set of modules which should be shown for any user ie when there is any face detected
			  everyoneClass: 'everyone',
			  // Set of modules that are always shown - show if there is a face or no face detected
			  alwaysClass: 'always',
			  // XML to recognize with haarcascade
			  cascade: 'modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml',
			  // Pre-encoded pickle with the faces
			  encodings: 'modules/MMM-Face-Reco-DNN/tools/encodings.pickle',
			  // Use Raspberry Pi camera or another type
			  // 1 = RasPi camera, 0 = other camera
			  //usePiCamera: 1,
			  usePiCamera: 0,
			  // Brightness, negative is darker, positive is brighter
			  brightness: 0,
			  // Contrast, positive value for more contrast
			  contrast: 0,
			  // If using another type of camera, you can choose
			  // i.e. 0 = /dev/video0 or 'http://link.to/live'
			  source: 0,
			  //source:~/dev/video0,
			  // Rotate camera
			  rotateCamera: 0,
			  // Method of facial recognition
			  // dnn = deep neural network, haar = haarcascade
			  method: 'dnn',
			  // Which face detection model to use
			  // "hog" is less accurate but faster on CPUs
			  // "cnn" is a more accurate deep-learning model which is GPU/CUDA accelerated
			  detectionMethod: 'hog',
			  // How long in milliseconds modules take to hide and show
			  animationSpeed: 3600000,
			  // Path to Python to run the face recognition
			  // null or '' means default path
			  pythonPath: '',
			  // Should a welcome message be shown using the MagicMirror alerts module?
			  welcomeMessage: true,
			  // Dictionary for person name mapping in welcome message
			  // Allows for displaying name with complex character sets in welcome message e.g. jerome => Jérôme, hideyuki => 英之
			  usernameDisplayMapping: null,
			  // Capture new pictures of recognized people, if unknown we save it in folder "unknown"
			  // So you can extend your dataset and retrain it afterwards for better recognitions
			  extendDataset: false,
			  // If extendDataset is true, you need to set the full path of the dataset
			  dataset: 'modules/MMM-Face-Reco-DNN/dataset/',
			  // How much distance between faces to consider it a match. Lower is more strict.
			  tolerance: 0.6,
			  // allow multiple concurrent user logins, 0=no, any other number is the maximum number of concurrent logins
			  multiUser: 0,
			  // resolution of the image
			  resolution: [1280, 960],
			  // width of the image for processing
			  processWidth: 500,
			}
		},
		{
			module: 'MMM-CECControl',
			config: {
				// Comport of your Raspberry Pi
				comport: 'RPI',
				// Turn the TV off if the Mirror start
				offOnStartup: false,
				// Turn xScreensaver off if TV turn on
				xscreensaver: false,
				// Use customCmdOn and customCmdOff instead of CEC
				useCustomCmd: true,
				// Custom command to run to turn TV on
				customCmdOn: 'vcgencmd display_power 1',
				// Custom command to run to turn TV off
				customCmdOff: 'vcgencmd display_power 0'
			}
		},
		{
			module: 'MMM-MotionControl',
			config: {
				// Delay to turn the TV off
				delay: 5000,
				// Interval to check modules
				interval: 6000,
				// Use the module MMM-Facial-Recognition-OCV3
				useFacialRecognitionOCV3: false,
				// Use the module MMM-Face-Reco-DNN
				useMMMFaceRecoDNN: true,
				// Array where tv should be on
				ontime: []
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
