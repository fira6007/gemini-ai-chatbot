import ask from "./util/ai.js";
import input from "./util/input.js"
async function main() {
    let userQuestion;
    let message;
    do {
        userQuestion= await input(message || "ask me anything: ")
        
        message = await ask(userQuestion) +"\n"
        
    
} while (userQuestion !== "exit");
}
main()
