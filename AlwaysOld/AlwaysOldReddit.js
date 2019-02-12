if(window.location.href.match(/www.reddit/)){
    oldUrl = window.location.href.replace("www.", "old.");
    window.location.href = oldUrl;
};