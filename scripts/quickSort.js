async function quickSort() {
    await sorter(0, n - 1);
    await colorUp();
    enableAllButtons();
}

async function sorter(l, r) {
    if (l >= r)
        return;

    let pivot = l,
        leftIndex = l + 1,
        rightIndex = r;

    updateOne(pivot, 'pointer2');

    while (rightIndex >= leftIndex) {
        updateOne(leftIndex, 'pointer3');
        updateOne(rightIndex, 'pointer3');
        await wait();

        if (arr[rightIndex] < arr[pivot] && arr[leftIndex] > arr[rightIndex]) {
            updateTwo(leftIndex, rightIndex, 'pointer1');
            await wait();
            swap(leftIndex, rightIndex);
            await wait();
            removeTwo(leftIndex, rightIndex);
            updateTwo(leftIndex, rightIndex, 'pointer3');
        }
        if (arr[leftIndex] <= arr[pivot]) {
            removeOne(leftIndex);
            leftIndex++;
        }
        if (arr[rightIndex] >= arr[pivot]) {
            removeOne(rightIndex);
            rightIndex--;
        }
    }

    if (pivot !== rightIndex) {
        updateTwo(pivot, rightIndex, 'pointer1');
        await wait();
        swap(pivot, rightIndex);
        await wait();
    }
    removeTwo(pivot, rightIndex);

    await sorter(l, rightIndex - 1);
    await sorter(rightIndex + 1, r);
}