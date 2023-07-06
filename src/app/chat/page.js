// create a completion variable that references the openai api call

import openai from "../utils/openai";

export default async function handler(req, res) {
  const chatCompletion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content:
          "Hello World",
      },
    ],
  });
  console.log(chatCompletion.data.choices[0].message);
  const responseText = chatCompletion.data.choices[0].message.content;
  

  
}
