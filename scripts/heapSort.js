async function heapSort() {
    for (let i = n / 2 - 1; i >= 0; i--) {
        updateOne(i, 'pointer2');
        await wait();
        await siftDown(n, i);
        removeOne(i);
    }

    for (let i = n - 1; i >= 1; i--) {
        updateTwo(i, 0, 'pointer1');
        await wait();
        swap(i, 0);
        await wait();
        updateOne(i, 'pointer2');
        await siftDown(i, 0);
        removeOne(i);
        updateOne(i, 'sorted');
    }
    updateOne(0, 'sorted');
    enableAllButtons();
}

async function siftDown(n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if (l < n && arr[l] > arr[largest])
        largest = l;

    if (r < n && arr[r] > arr[largest])
        largest = r;

    if (largest != i) {
        updateTwo(i, largest, 'pointer1');
        await wait();
        swap(i, largest);
        await wait();
        removeTwo(i, largest);
        await siftDown(n, largest);
    }
}