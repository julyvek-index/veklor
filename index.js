const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    
  }
);

client.login('Njk5Mjg1NzI4NDcwNzYxNTcy.XpSN_w.dJCCZ82vMHRC7FJgEq15iw9c_84');