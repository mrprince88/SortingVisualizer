async function bubbleSort() {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            updateTwo(j, j + 1, 'pointer2');
            await wait();
            if (arr[j] > arr[j + 1]) {
                updateTwo(j, j + 1, 'pointer1');
                await wait();
                swap(j, j + 1);
                await wait();
            }
            removeTwo(j + 1, j);
        }
        nums[arr.length - i - 1].classList.add('sorted');
    }
    enableAllButtons();
}