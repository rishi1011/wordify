const form = document.getElementById("form")
const input = document.querySelector('input')
const main = document.getElementById("main")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const value = input.value
    res = wordify(value)
    
})

function wordify(string) {
    length = string.length;
    res = ""

    ones = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    }

    twos = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "fourty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    }

    let i = 0;
    temp = length
    flag = 0
    while (i < length) {
        if (string[i] === '0') {
        }else if (temp == 4) {
            res += ones[string[i]] + " thousand ";
        } else if (temp == 3) {
            res += ones[string[i]] + " hundred and ";
        } else if (temp == 2) {
            if (string[i] === '1') {
                flag = 1
            } else {
                res += twos[string[i]] + " ";
            }
        } else {
            if (flag == 1) {
                flag = 0
                if (string[i] === '1') {
                    res += "eleven"
                } else if (string[i] === '2') {
                    res += "twelve"
                } else if (string[i] === '3') {
                    res += "thirteen";
                } else if (string[i] === '5') {
                    res += 'fifteen';
                } else {
                    res += ones[string[i]] + "teen"
                }
            } else {
                res += ones[string[i]];
            }
        }
        i++;
        temp--;
    }

    const p = document.createElement('p');

    p.innerHTML = `
        ${res}
    `
    main.appendChild(p)

    return res;

}

