function reverse(s){
    const splitS = s.split(" ");
    const stack = [];

    for(let i of splitS){
        stack.push(i);
    }

    let finalS ="";
    while(stack.length){
        const current = stack.pop();

        if(current){
            finalS += " "+ current
        }
    }
    return finalS.trim();
}

console.log(reverse("the sky is blue"));
