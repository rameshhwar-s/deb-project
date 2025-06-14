const greetingList = [
    'Hello World!',
    'Bonjour monde!',
    'Hallo Welt!',
    'வணக்கம்!'
];
function changeGreeting() {
    const randomIndex = Math.floor(Math.random() * greetingList.length);
    const randomGreeting = greetingList[randomIndex];
    document.getElementById('greetingTxt').textContent=randomGreeting.toString(); 
}

function getCount() {
    const randomIndex = Math.floor(Math.random()*1000);
    document.getElementById('visitorCountTxt').textContent="Visitor Count: "+ randomIndex.toString();
    console.log(randomIndex);
}