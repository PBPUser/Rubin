const Discord = require('discord.js');
const robot = new Discord.Client();
const YTDL = require("ytdl-core");
robot.login(process.env.BOT_TOKEN);
//hmm...

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
        //member.kick('Optional reason that will display in the audit logs').then(() => {
          //message.reply(`Вы успешно кикнули ${user.tag}`);
        //})
        
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

    switch (args[0].toLowerCase()) {
        case "tust":
        message.channel.sendMessage("AGA");
        break;
        case "88005553535" :
        message.channel.sendMessage("https://www.youtube.com/watch?v=SxbTtFRN5cE");
        break;
        case "228" :
        message.channel.sendMessage("Босса мы не бросим!");
        break;
        case "1337" :
        message.channel.sendMessage("Такой команды не существует! Cписок команд Хрен тебе)");
        break;
        case "embed" :
        const embed = new Discord.RichEmbed()
        .setTitle('Hmm...')
        .setColor(0xFF0000)
        .setDescription('MMM...')
        .setImage("https://i.ytimg.com/vi/DXtGUzEz6qc/maxresdefault.jpg")
        message.channel.send(embed);
        break;
        case "":
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
        member.kick('ТО ЧТО ДОЛЖНО БЫТЬ В ЛОГАХ)').then(() => {
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
                  reason: 'УХАДИ!',
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
        case "gcolor":
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
        case "gurlavatar" :
              const embed = new Discord.RichEmbed()
            .setTitle('It s magic')
            .setColor(0xFF0000)
            .setDescription('Вот твоя аватарка!')
            .setImage(message.author.avatarURL);
            message.channel.send({embed});
                //message.channel.sendMessage("Вот твоя аватарка,"+ message.author.username + message.author.avatarURL
        break;

        case "setnick" :
        if(args[0]){
        //message.author.sendMessage("Хех");
        message.channel.sendMessage("Никнейм сброшен.");
        }


        break

        case "play":        /*if(!args[1]) {
            message.channel.sendMessage("Укажите ссылку!");
            return;
        }

        if(!message.member.voiceChannel){
            message.channel.sendMessage("Вы не в голосовом канале!");
            return;
        }

        if(!servers[message.guild.id]) servers[message.guild.id] = {
            quene: []
        };

        var server = servers[message.guild.id];

        server.quene.push(args[1]);

        if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(Connection){
            play(Connection, message);
    });*/
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
        case "say" :
        message
        break;
        case "help" :
        message.channel.sendMessage("```\n СПРАВКА \n -help - помощь \n -gURLAvatar - Получить аватарку\n -kick - Выгнать пользователя\n -ban - Выгнать пользователя и запретить доступ к серверу ``` ");
        break;
        case "" :
            message.channel.sendMessage("Введите команду,список команд -help");
        break;
        default:
            message.channel.sendMessage("Такой команды не существует! Cписок команд -help");
    }
});
