async function selectionSort() {
    let smallestIndex = 0,
        currentIndex = 0;
    while (currentIndex <= n - 1) {
        smallestIndex = currentIndex;
        nums[currentIndex].classList.add('pointer2');
        for (let j = currentIndex + 1; j < n; j++) {
            nums[j].classList.add('pointer2');
            await wait();
            if (arr[smallestIndex] > arr[j]) {
                nums[smallestIndex].classList.remove('pointer1');
                smallestIndex = j;
                updateTwo(smallestIndex, currentIndex, 'pointer1');
                await wait();
            }
            nums[j].classList.remove('pointer2');
        }
        swap(smallestIndex, currentIndex);
        await wait();
        removeTwo(smallestIndex, currentIndex);
        nums[currentIndex].classList.add('sorted');
        currentIndex++;
    }
    enableAllButtons();
}