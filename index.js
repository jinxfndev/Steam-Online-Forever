const SteamUser = require('steam-user');

const user = new SteamUser();

const logOnOptions = {
	accountName: '838080711',  //Enter here your account login
	password: 'vladoprea3@'		 //Enter your password
}

user.logOn(logOnOptions);

const keepAlive = require("./server");



keepAlive();

user.on('loggedOn', () => {
	console.log(logOnOptions.accountName + ' - Successfully logged on');
	user.setPersona(5);                 //1 - online, 7 - invisible
	user.gamesPlayed(730);    //List app IDs
});