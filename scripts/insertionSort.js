async function insertionSort() {

    for (let i = 1; i < n; i++) {
        let j = i;
        updateOne(i, 'pointer2');
        await wait();
        while (j > 0 && arr[j] < arr[j - 1]) {
            updateTwo(j, j - 1, 'pointer1');
            await wait();
            swap(j, j - 1);
            await wait();
            removeTwo(j, j - 1);
            if (j == i) {
                updateOne(j, 'pointer2');
            }
            j--;
        }
        removeOne(i);
    }

    await colorUp();
    enableAllButtons();
}