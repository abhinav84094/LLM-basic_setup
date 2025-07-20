

import { GoogleGenAI } from "@google/genai";
import readlineSync from "readline-sync"
import { text } from "stream/consumers";

const ai = new GoogleGenAI({apiKey:"AIzaSyB8zXhVYV5WgxIVEjFxw24CaqlDrRPRg7s"});

const History = [];
async function Chatting(userProblem) {

    History.push({
        role:'user',
        parts:[{text:userProblem}]
    })

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents:History
  });


    History.push({
        role:'model',
        parts:[{text:response.text}]
    })

    console.log("\n", response.text);

}

async function main(){
    const userProblem = readlineSync.question("Ask me anything----");
    await Chatting(userProblem)
    main();
}


main();