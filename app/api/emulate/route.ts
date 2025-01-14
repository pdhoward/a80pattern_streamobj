
import { openai } from "@ai-sdk/openai";
import { streamText, smoothStream } from "ai";

//////////////////////////////////////////////////
// emulate a program based on set of business ///
//    rules and mock files provided          ///
///////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////
// OPENROUTER - Implement as part of product solution                 //
// https://sdk.vercel.ai/providers/community-providers/openrouter    //
//////////////////////////////////////////////////////////////////////

export async function POST(request: Request) {
  const { messages } = await request.json();

  let systemInstruction = ''

  const instructionArray = {
    "system": `You will emulate an application.
      You receive detailed instructions (rules) on how an application works. 
      Emulate the execution of the program, following the instructions precisely to transform a set of data that you receive. 
      You will do nothing else but emulate the operation of the program, and generate the result, showing the updated transaction file in a table.
      Where needed, make reasonable assumptions about the values of inputs if not otherwise provided, like interest rates or FICO scores.
      Whenever presenting updated files, show them in a table format unless otherwise instructed. Subsequently, the user may ask questions on how 
      you arrived at a conclusion if asked. Be concise but complete in your answer.
      In addition, the user may ask for changes to assumptions or may add additional rules and ask you to process the
      files again with the updated set of rules. Always present your results in a well formatted table when applicable. 
      You will throw errors if the detailed execution steps appear to conflict with other steps. 
      `,
    "default": "You are a helpful assistant"
  }  

  /////////////////////////////////////////////////////////
  // redesign process for client - server interactions  //
  //     see README for client functions for api call  //
  //////////////////////////////////////////////////////

  if (messages.length === 1) {
    const {role} = messages[0]
    switch (role) {
      case "system": 
       systemInstruction = instructionArray["system"]
       break;
      default: 
       systemInstruction = instructionArray["default"]  
    }
  }  
  
  try {
    const stream = streamText({
      model: openai("gpt-4o"),
      system: systemInstruction,
      messages,      
      //experimental_continueSteps: true,
      //experimental_transform: smoothStream()
    });  
    
    return stream.toDataStreamResponse();      
    
  } catch (error: any) {   
      return new Response("An error occurred", { status: 500 });
  } 
}
