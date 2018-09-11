const Discord = require('discord.js');
const robot = new Discord.Client();
const YTDL = require("ytdl-core");
robot.login(process.env.BOT_TOKEN);

const PREFIX = "-";

var token = 'NDc5MTM4OTA3MTUwMjIxMzIz.DlWCaA.uO6zARItVRqep-HQDS8nYEiafHo';
var owerlord = '@AMDUser#8732';    
var servers = {};
var nullavatar = '';
var blockedID = '218646139442954240';

function play(Connection,message) {
    var server = servers[message.gulid.id];
    server.dispatcher = Connection.playstream(YTDL(server.quene[0], {filter: "audioonly"}));
    server.quene.shift();
    server.dispatcher.on("endon.disconnect();",function(){
        if (server.quene[0]) play(Connection,message);
        else Connection.disconnect();
    });
}
robot.on("ready",function(){
    console.log("ready");
});
robot.on("guildMemberAdd",function(member) {
    var servId = member.guild.id;
    
    if(servId == "331353745973837834"){ //PBP
        console.log("Joined to PBP!");
        member.user.sendMessage (member.guild.id);
    member.guild.channels.find("name","pbpchat_№1").sendMessage(member.toString() + ",привет!");
    member.addRole(member.guild.roles.find("name","Spectator"));
    member.user.sendMessage ("TEST");
}
    else

    if(servId == "340493689325486080"){ //DM
            console.log("Joined to DM!");
            member.user.sendMessage (member.guild.id);
        member.guild.channels.find("id","425016137554591745").sendMessage(member.toString() + ",привет!");
        member.addRole(member.guild.roles.find("name","User"));
        member.user.sendMessage ("Приветствуем тебя в DarMusic!");
    }
});

robot.on("message" , function(message)  {

    if(message.author.id==blockedID) return;

    if(message.author.equals()) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0]) {
        case "tust":
        message.channel.sendMessage("AGA");
        break;
        case "workingtest":
        message.channel.sendMessage("i am WORKING");
        break;
        case "kick":
        if (message.member.permissions.has('KICK_MEMBERS')){
    if (!message.guild) return;
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply(`Вы успешно кикнули ${user.tag}`);
        }).catch(err => {
          message.reply(`Неудалось кикнуть пользователя ${user.tag}`);
          console.error(err);
        });
      } else {
        message.reply('Этот пользователь защищен от кика');
      }

    // Otherwise, if no user was mentioned
    } else {
      message.reply('Укажите tag пользователя,которого собираетесь кикнуть)');
    }
} else {
    message.reply('У вас не достаточно прав!')
}
        break;
        case "ban" :
        if (message.member.permissions.has('BAN_MEMBERS')){
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member.ban({
                  reason: 'They were bad!',
                }).then(() => {
                  message.reply(`Успешно забанен ${user.tag}`);
                }).catch(err => {y
                  message.reply('НЕ НАЙДЕНО');
                  // Log the error
                  console.error(err);
                });
              } else {
                message.reply('That user isn\'t in this guild!');
              }
            } else {
            // Otherwise, if no user was mentioned
              message.reply('You didn\'t mention the user to ban!');
            }
        }
        else {
            message.reply("У вас не достаточно прав")
        }
        break
        case "_-" :
        break;
        case "info":
        message.channel.sendMessage("Noting)")
            break;
        case "about":
        message.channel.sendMessage("Я бот")
            break
        case "gColor":
        /*if(!args[1]) {
            message.channel.sendMessage("Укажите цвет в формате HEX");
            return;
        }
        message.gulid.createRole({
            name : message.user.username,
            color : "#FFFFFF",
            permissions : []

        }).then(function(role) {
            member.addrole(role);
        });*/
        //message.replay("this command is hot!");

        break;
        case "gURLAvatar" :
        if(!args[1]) {
            if(message.author.avatarURL = nullavatar){
                message.channel.sendMessage("Невозможно получить аватарку");
            }
            else{
                message.channel.sendMessage("Вот твоя аватарка,"+ message.author.username + message.author.avatarURL);
            }
        } 
        
        else

        if(!args[0]){
            message.channel.sendMessage("```\nРезультат:\nПоезд сделал бум ```");
    }
        
        break;

        case "setNick" :
        if(args[0]){
        //message.author.sendMessage("Хех");
        message.channel.sendMessage("Никнейм сброшен.");
        }


        break

        case "play":
        if(!message.member.voiceChannel)
    return message.channel.send("You must be in a voice channel for me to start playing music");
  if(message.guild.me.voiceChannel)
return message.channel.send("Im busy at a different voice channel on the server. Try again later.");

  if(!args[0])
return message.channel.send("Please enter a youtube URL for me to load the song from.");

  let validate = await ytdl.validateURL(args[0]);
  if(!validate)
    return message.channel.send("Whoops, re-check the URL you gave me, I am getting an error while trying to play the song. ");

  let info = await ytdl.getInfo(args[0]);
  let voiceChannel = message.member.voiceChannel;
  let connection = await voiceChannel.join();
  let dispatcher = await connection.playStream(ytdl(args[0], {filter: 'audioonly'}))
    .on("end", end => {
      message.channel.send(`Finished Playing: ${info.title}`);
      voiceChannel.leave();
    })
    .on("error", error => {
      console.error(error);
      message.channel.send("Error Occurred during playback. Try again later.");
    });
  return message.channel.send(`Now Playing: ${info.title}`);
    message.channel.sendMessage("Данная команда не завелась с пинка");
        break;

        case "skip" :
        /*var server = servers[message.gulid.id];

        if(server.dispatcher) server.dispatcher.end();*/
        message.channel.sendMessage("Данная команда не завелась с пинка");
        break;
        case "stop" :
        /*var server = servers[message.gulid.id];

        if(message.guild.voiceConnection) message.guild.voiceConnection.disconnect();*/
        message.channel.sendMessage("Данная команда не завелась с пинка");
        break;
        case "help" :
        message.channel.sendMessage("```\n СПРАВКА \n -help - помощь \n -gURLAvatar - Получить аватарку\n -kick - Выгнать пользователя\n -ban - Выгнать пользователя и запретить доступ к серверу ``` ");
        break
        case "" :
            message.channel.sendMessage("Введите команду,список команд -help");
        break
        default:
            message.channel.sendMessage("Такой команды не существует! Cписок команд -help");
    }
});
