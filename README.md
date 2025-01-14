# Altitude80 - Standards Demo

* AI-SDK Stream Object with Output mode
[`streamObject`](https://sdk.vercel.ai/docs/reference/ai-sdk-core/stream-object) 

[output mode](https://sdk.vercel.ai/docs/ai-sdk-core/generating-structured-data#output-strategy-array) 

* Usage
```bash
OPENAI_API_KEY=sk-...
```
```bash
pnpm dev
```

### Comments on AI Client - Server interactions

> Complex interchange of data in multitenant, multi-modal, multi-model, omnichannel set of requirements
> Artifact repositories and Agent interactions that reply on artifacts must be version controlled. Specific unambiguous methods for time travel and system of record interactions
> OpenRouter to be explored for managing multimodel requirements
> Channels equate to 'use cases', driven by analyst requirements for exploration, discovery, collaboration and remediation of a code base
> The prototype code base is structured for demonstrations. The refactoring path to an MVP will require redesign of client-server interactions - while preserving the the base app technology stack, architecture and workflow

> Current client functions used for AI Agent api signature:


  ////////////////////////prototype only //////////////////////////
  const firstValue = Object.values(instructionsMap)[0]

  const detailedInstructions = {
    role: "system",
    content: `Instructions: ${JSON.stringify(firstValue)}\nData: ${JSON.stringify(transactionFile)}`,
  };

  const handleSyntheticDataGeneration = async () => {
    ///////////////////////////////////////////////////
    ////    real-time generation using 4o         ////
    // redesign to gen entities with ref integrity //
    ////////////////////////////////////////////////
  };

  const handleFileChange = (value: string) => {
    setSelectedFile(value);
    setIsExecuteDisabled(false);
  };

  const handleModelChange = (value: string) => {

    ////////////////////////////////////////////
    // note defaults to 4o. Test OpenRouter ///
    //////////////////////////////////////////

    setSelectedModel(value);
    setIsExecuteDisabled(false);
  };

  * Other actions for MVP

  > Integrate the suite of prompts for Agent. (static or dynamic assignment)
  > API for collaboration? Post to Slack, email, message services etc
  > Design for version controls