async function mergeSort() {
    await merge_partition(0, n - 1);

    for (let i = 0; i < n; i++) {
        updateOne(i, 'sorted');
        await wait();
    }
    enableAllButtons();
}

async function merge(start, mid, end) {
    let p = start,
        q = mid + 1;
    let a = [],
        k = 0;

    for (let i = start; i <= end; i++) {
        if (p > mid) {
            a[k++] = arr[q++];
            updateOne(p - 1, 'pointer1');
            updateOne(mid, 'pointer1');
        } else if (q > end) {
            a[k++] = arr[p++];
            updateOne(p - 1, 'pointer1');
            updateOne(end, 'pointer1');
        } else if (arr[p] < arr[q]) {
            a[k++] = arr[p++];
            updateOne(p - 1, 'pointer1');
            updateOne(q - 1, 'pointer1');
        } else {
            a[k++] = arr[q++];
            updateOne(q - 1, 'pointer1');
        }
        await wait();
    }

    for (let t = 0; t < k; t++) {
        arr[start++] = a[t];
        if (nums[start - 1].style.height !== arr[start - 1] + "vh") {
            nums[start - 1].style.height = arr[start - 1] + "vh";
            await wait();
        }
        removeOne(start - 1);
    }
}

async function merge_partition(start, end) {
    if (start < end) {
        let mid = Math.floor((start + end) / 2);
        updateOne(mid, 'pointer2');
        await wait();
        await merge_partition(start, mid);
        await merge_partition(mid + 1, end);
        await merge(start, mid, end);
    }
}