const textchatbot=document.querySelector(".sec-textchat");
            const textLoad1 = () =>{
                setTimeout( () => {
                    textchatbot.textContent="We Provide Some Web Virtual Assistent's......";
                },0);
                setTimeout(()=>{
                    textchatbot.textContent="Communicate Your Virtual Assistent's...";
                },4000);
                setTimeout(()=>{
                    textchatbot.textContent="JARVIS is an AI agent to automate Web-Tasked tasks.....";
                },8000);
                setTimeout(()=>{
                    textchatbot.textContent="Mezo is Application of AI which Perform Basic Task........";
                },12000);
                setTimeout(()=>{
                    textchatbot.textContent="Natasha is an AI Application to Perform on User Inputs......";
                },16000);
            }
            textLoad1();
            setInterval(textLoad1,20000);
const text=document.querySelector(".sec-text");
const textLoad = () =>{
    setTimeout( () => {
        text.textContent="Welcome To........";
    },0);
    setTimeout(()=>{
        text.textContent="Artificial Intelligence and Data Science..";
    },4000);
    setTimeout(()=>{
        text.textContent="Move to New Another World.....";
    },8000);
    setTimeout(()=>{
        text.textContent="Various AI Tools is Just For you....";
    },12000);
}
textLoad();
setInterval(textLoad,16000);

const textchatbot1=document.querySelector(".sec-textchat1");
const textLoad2 = () =>{
    setTimeout( () => {
        textchatbot1.textContent="Welcome To Chatbot......";
    },0);
    setTimeout(()=>{
        textchatbot1.textContent="An open Source chatbot Platform....";
    },4000);
    setTimeout(()=>{
        textchatbot1.textContent="Users to install their own Chatbot...";
    },8000);
    setTimeout(()=>{
        textchatbot1.textContent="Siri Apples's iphone bot";
    },12000);
    setTimeout(()=>{
        textchatbot1.textContent="Genny is ai chatbot..";
    },16000);
    setTimeout(()=>{
        textchatbot1.textContent="Maths Assistent-AI Tool....";
    },20000);
    setTimeout(()=>{
        textchatbot1.textContent="You Can Easily Chat with us.....";
    },24000);
}
textLoad2();
setInterval(textLoad2,28000);
// For side bar script
function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}
function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'

}
// For starting Typing script upper container
const textupper = document.querySelector(".sec-textupper");
const textLoad5 = () => {
    setTimeout(() => {
        textupper.textContent = "Welcome To My Creation.....";
    }, 0);
    setTimeout(() => {
        textupper.textContent = "Make your Resume with AI Developer...";
    }, 4000);
    setTimeout(() => {
        textupper.textContent = "Let's See the AI  Terminal....";
    }, 8000);
    setTimeout(() => {
        textupper.textContent = "Let's See the Calci Terminal....";
    }, 12000);
    setTimeout(() => {
        textupper.textContent = "Let's Known about Weather Forcast....";
    }, 16000);
}
textLoad5();
setInterval(textLoad5, 20000);