function label_create(tagname, attrname, attrvalue, content) {
    const label_ele = document.createElement(tagname);
    label_ele.setAttribute(attrname, attrvalue);
    label_ele.innerHTML = content;
    return label_ele;
}

function input_create(tagname, attrname1, attrvalue1, attrname2, attrvalue2) {
    const input_ele = document.createElement(tagname);
    input_ele.setAttribute(attrname1, attrvalue1);
    input_ele.setAttribute(attrname2, attrvalue2);    
    return input_ele;
}

function br_create() {
    return document.createElement('br');
}

function createCalculator() {
    const calculator = document.getElementById('calculator');
    if (!calculator) {
        console.error('Calculator container not found');
        return;
    }

    
    const display = input_create('input', 'type', 'text', 'id', 'display');
    display.className = 'display';
    display.disabled = true;
    calculator.appendChild(display);

    
    const buttons = [        
        '7', '8', '9', '+',
        '4', '5', '6', '-',
        '1', '2', '3', '*',
        'C', '0', '=', '/'
    ];

    buttons.forEach(value => {
        const button = document.createElement('button');
        button.textContent = value;
        button.addEventListener('click', () => handleButtonClick(value));
        calculator.appendChild(button);
    });
}

function handleButtonClick(value) {
    const display = document.getElementById('display');
    if (!display) {
        console.error('Display element not found');
        return;
    }
    let currentValue = display.value;

    if (value === 'C') {
        display.value = '';
    } else if (value === '=') {
        try {
            display.value = eval(currentValue);
        } catch {
            display.value = 'Error';
        }
    } else {
        display.value += value;
    }
}

createCalculator();