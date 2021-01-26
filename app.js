const grid = document.querySelector('.grid');
const slider1 = document.querySelector('.slider1');
const slider2 = document.querySelector('.slider2');
const navbuttons = document.querySelectorAll('.nav-buttons');
const reset = document.querySelector('.reset');

slider1.addEventListener("input", updateArray);
reset.addEventListener('click', updateArray);

let arr = [];
let nums;
let n;
let newArr = [];

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

function draw() {

    for (let i = 0; i < slider1.value; i++) {
        arr.push(Math.floor(Math.random() * (70 - 1) + 2));
        newArr.push(arr[i]);
    }
    newArr.sort((a, b) => a - b);
    n = arr.length;
    for (let i = 0; i < n; i++) {
        if (isOverflown(grid)) {
            slider1.max = i;
            slider.value = i;
            break;
        }
        let num = document.createElement('div');
        let arrEntry = document.createElement('div');
        const h = arr[i],
            w = 75 / n;
        num.classList.add('number');
        num.style.height = h + "vh";
        num.style.width = w + "vw";
        grid.appendChild(num);
    }
    nums = document.querySelectorAll('.number');
}

function updateArray() {
    grid.innerHTML = "";
    arr = [];
    newArr = [];
    draw();
}

window.onload = updateArray();

async function wait() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done"), 1000 / slider2.value);
    });
    let res = await promise;
}

async function colorUp() {
    for (let i = 0; i < n; i++) {
        nums[i].classList.add('sorted');
        await wait();
    }
}

function removeColor() {
    if (!nums[0].classList.contains('sorted'))
        return;
    for (let i = 0; i < n; i++)
        nums[i].classList.remove('sorted');
}

function removeOne(i) {
    nums[i].classList.remove('pointer2');
    nums[i].classList.remove('pointer1');
    nums[i].classList.remove('pointer3');
}


function updateOne(i, color) {
    removeOne(i);
    nums[i].classList.add(color);
}

function updateTwo(i, j, color) {
    updateOne(i, color);
    updateOne(j, color);
}

function removeTwo(i, j) {
    removeOne(i);
    removeOne(j);
}

function swap(j, i) {
    let t = arr[j];
    arr[j] = arr[i];
    arr[i] = t;
    nums[i].style.height = arr[i] + "vh";
    nums[j].style.height = arr[j] + "vh";
}

function lockAllButtons() {
    navbuttons.forEach(i => {
        i.disabled = true;
    })
    reset.disabled = true;
    slider1.disabled = true;
    slider2.disabled = true;
}

function enableAllButtons() {
    navbuttons.forEach(i => {
        i.disabled = false;
    })
    reset.disabled = false;
    slider1.disabled = false;
    slider2.disabled = false;
}

navbuttons.forEach(i => {
    i.addEventListener('click', () => {
        removeColor();
        switch (i.id) {
            case '1':
                lockAllButtons();
                bubbleSort();
                break;
            case '2':
                lockAllButtons();
                mergeSort();
                break;
            case '3':
                lockAllButtons();
                selectionSort();
                break;
            case '4':
                lockAllButtons();
                heapSort();
                break;
            case '5':
                lockAllButtons();
                insertionSort();
                break;
            case '6':
                lockAllButtons();
                quickSort();
                break;
        }
    })
});