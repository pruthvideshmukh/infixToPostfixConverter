var btn = document.getElementById("btn");

var stack = [];
var topInd = -1;

function isEmpty(){
    if(topInd == -1)
        return true;
    return false;
}

function push(val) {
    topInd++;
    stack[topInd] = val;
}

function pop() {
    if(topInd == -1)
        return 0;
    else
    {
        var val = stack[topInd];
        topInd--;
        return val;
    }
}

function stackTop() {
    return stack[topInd];
}

function isalnum(ch) {
    if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9'))
        return 1;
    return 0;
}

function getPriority(ch) {
    if (ch == '^')
        return 4;

    if (ch == '*' || ch == '/' || ch == '%')
        return 3;

    if (ch == '+' || ch == '-')
        return 2;

    return 0;
}

btn.addEventListener("click",function(){
    infix = document.getElementById("infix").value;
    ans = document.getElementById("ans");

    var postfix = [];
    var j = 0;

    for (var i = 0; i < infix.length; i++) {
        var ch = infix[i];
        if (isalnum(ch))
            postfix[j++] = ch;
        else
        {
            if (ch == '(') {
                push(ch);
            }
            else if (ch == ')') {
                while (stack[topInd] != '(') {
                    postfix[j++] = pop();
                }
                pop();
            }
            else{                
                while (!isEmpty() && (getPriority(stackTop()) >= (getPriority(ch)))) {
                    postfix[j++] = pop();
                }
                push(ch);
            }
        }
    }

    while (!isEmpty()) {
        postfix[j++] = pop();
    }

    var st = "";
    for (var i = 0; i < postfix.length; i++) {
        st += postfix[i];
    }

    document.getElementById("ans").value = st;
})
