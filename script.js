var arrr = [];
var topp = -1;

function push(val) {
    topp++;
    arrr[topp] = val;
}

function pop() {
    if(topp == -1)
    {
        return 0;
    }
    else
    {
        var val = arrr[topp];
        topp--;
        return val;
    }
}

function isOperator(ch) {
    if (ch == '+' || ch == '-' || ch == '*' || ch == '/' || ch == '%' || ch == '^' || ch == '(' || ch == ')') {
        return 1;
    }
    return 0;
}

function getPriority(ch) {
    if (ch == '^') {
        return 4;
    }

    if (ch == '*' || ch == '/' || ch == '%') {
        return 3;
    }

    if (ch == '+' || ch == '-') {
        return 2;
    }

    return 0;
}

function infixToPostfix() {
    infix = document.getElementById("infix").value;
    ans = document.getElementById("ans");

    var postfix = [];
    var j = 0;

    for (var i = 0; i < infix.length; i++) {
        var ch = infix[i];
        if (isOperator(ch))
        {
            if (ch == '(') {
                push(ch);
            }
            else if (ch == ')') {
                while (arrr[topp] != '(') {
                    postfix[j++] = pop();
                }
                pop();
            }
            else if (getPriority(ch) > (getPriority(arrr[topp]))) {
                push(ch);
            }
            else{                
                while ((getPriority(ch) <= (getPriority(arrr[topp]))) && topp > -1) {
                    postfix[j++] = pop();
                }
                push(ch);
            }
        }
        else
        {
            postfix[j++] = ch;
        }
    }

    while (topp != -1) {
        postfix[j++] = pop();
    }

    var st = "";
    for (var i = 0; i < postfix.length; i++) {
        st += postfix[i];
    }

    document.getElementById("ans").value = st;
}
