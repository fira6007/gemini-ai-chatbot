import ask from "./util/ai.js";
import input from "./util/input.js"
async function main() {
    let userQuestion;
    let message;
    do {
        userQuestion= await input(message || "Ask me anything and type 'exit' to exit the chat: ")
        
        userQuestion =="exit"? console.log("thanks for chatting with me... see you next time") : message = await ask(userQuestion) +"\n"
        
    
} while (userQuestion !== "exit");
}
main()
