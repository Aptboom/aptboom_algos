// This is just a sample file to see what the outputs look like for each function called
// in raffle.js: the actual file is more detailed and involves realtime data retrieval
export function getListees(code, x){
    var arr = [];
    var i = 0;
    while (i < 10){
        arr.push(i.toString());
        i += 1;
    }
    return arr;
}

export function getRate(x, y, z){
    return Math.random()*0.100*z ;

}

export function getSlots(code, x){
    return 3;
}

export function updateRate(add, code, res){
    return;
}

export function tasksDone(code, x){
    // such a function will be used to see if the user has done twitter
    // and discord tasks to improve their rate for winning the giveaway 
    // or whitelist slot

    var rand = Math.random()*100;
    if (rand < 25){
        return 1;
    }
    else if (rand >= 25 && rand < 75){
        return 2;
    }
    else {
        return 3;
    }
}