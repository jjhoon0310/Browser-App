const quotes = [
    {
        quote: "경쟁은 X발 이기고 봐야지",
        author: "전한길",
    },
    {
        quote: "다 지우거나 대학 포기하거나",
        author: "정승제",
    },
    {
        quote: "아빠가 뼈 빠지게 벌었잖아 어떻게 그러냐?",
        author: "강원우",
    },
    {
        quote: "지금처럼 살아 그리고 앞으로도 82점 받아",
        author: "내 다짐",
    },
    {
        quote: "될 때까지 해보는 거야 모르거든",
        author: "강원우",
    },
    {
        quote: "걱정을 해야 돼? 실행을 해야지",
        author: "곽동령",
    },
    {
        quote: "벽에 부딫혔다는 것은 성장의 기회가 주어진 것",
        author: "멘탈훈련소",
    },
    {
        quote: "늦었는데도 성공해서 몇점 나올까 설레지 않아?",
        author: "내 다짐",
    },
    {
        quote: "이유가 있겠지, 이유가 있을꺼야",
        author: "싸이(박재상)",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
