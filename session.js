//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUJ1aVhiZnFOWVlLMXNhWUw4VlBzOThCQXJUdkhkWXBLcU5zT0hBMTAxTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNW1SREhQaHFtU1psNEt1RUNIN003RVI3NmU2eGdMaHU0Q2pIOWV0T0tIYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTVRoalNyMlk3Vjg0aEIrTUxHSVl2V0tLZXVIaWxTVjZhUDVCWjJnWTMwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZOXNCY1RONlBvb3V6TmpBTFZkVHI4akRMU2t4d0laOGxIQk1QWmRBZTNZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndITEgrZVEzMElUOTNkelpuRk1WZ2tOc3Z0RHRhV0d0M1lHWHZFckVUMDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlBb1ZjWDdGeDVEZThuRG83SUViOE9NWlpIL0xVNEpxeWkrWjVNU1NKV2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUN5ek14QjVUeWFJdFFzVmtXRlVaMklJUGJjSHAwUTBiVTlkK2R1cmFVRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOU9XQkZ4QitaSnBua00rQjAwdzVndlNuOW4xcDVaMGQxTkdTNytKNHltdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im91eUdpd2FQSms5NDRHV2R0WUI5TDN5S2plTmdSanZFV296dlF4aEJ2STRTcnJabVY1K0RCcEpDZ0h0Y2F3TDZvaFJLYW92S1g2Q0tLK2hiOFBQZ0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiJDdjZ5RU1ZZ01qL2wyWnBNa1oyaUxISUc1ZktSOE55US9pZmRzWGxnK2tFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtcV96WTUzV1J3eVo5eDZwQUdHZHpnIiwicGhvbmVJZCI6ImVlNDdiMzRiLWMzMTYtNGQ1My1hZmFjLTk4YTllYWY5YzI3NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4M1Z4NUZWbWd0MlpQNXNjdWdZcjVES1RtL289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNCt5N3ZOVjBidFVkd1RuK2J2c3lBWjBlNXBvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkZLUFpCMldKIiwibWUiOnsiaWQiOiI5NDc0MzY5Njg0OTozMkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJDSEFNQSDjg4QiLCJsaWQiOiIyMzExMTI2OTM1NTExNTc6MzJAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNM21wZjRGRUphanhjWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvbEQxaFkrUThMOVVrUVBWWnUzU01abDhWWldNUnNZcURTK2plZzRLREVJPSIsImFjY291bnRTaWduYXR1cmUiOiJSK3ZHN051WS9MMVVqMnhRVjZtL05Db3JJTEJZWDFMNFFiNHovaW5hQ0JqNnZ1Wll3aVhTSXRRb3JNTUduM3ZHdUZsc1lZblhqWnN0OXNFUlhrWEREZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV0QvYnJuK3kyUVNqZ3haaCtLMy9odFpodW0xT3dlbXBqUENCNHZTQnVDbnBZRHcwcWJKWnB3M3NBcUUra2lnWnpQQnQrSnlRVkErazk2SkUyWEZEQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc0MzY5Njg0OTozMkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmNVE5WVdQa1BDL1ZKRUQxV2J0MGpHWmZGV1ZqRWJHS2cwdm8zb09DZ3hDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTg1NDgzODksImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzBOIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
