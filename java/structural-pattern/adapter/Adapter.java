interface ScoreOperation{
    public <T extends Comparable<T>> T[] sort(T[] arr);
    public <T extends Comparable<T>> int search(T[] arr, T key);
}

class QuickSort{

    public <T extends Comparable<T>> T[] sort(T[] arr) {
        sort(arr, 0, arr.length - 1);
        return arr;
    }

    private <T extends Comparable<T>>void sort(T arr[], int fromIndex, int toIndex) {
        int q = 0;
        if(fromIndex < toIndex) {
            q = partition(arr, fromIndex, toIndex);
            sort(arr, fromIndex, q - 1);
            sort(arr, q + 1, toIndex);
        }
    }

    private <T extends Comparable<T>>int partition(T arr[], int fromIndex, int toIndex) {
        T x = arr[toIndex];
        int i = fromIndex - 1;
        for(int j = fromIndex; j < toIndex; j++) {
            if(arr[j].compareTo(x) < 0) {
                swap(arr, ++i, j);
            }
        }
        swap(arr, ++i, toIndex);
        return i;
    }

    private <T extends Comparable<T>> void swap(T[] arr, int left, int right) {
        T temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }
}

class BinarySearch{
    public <T extends Comparable<T>> int search(T[] arr, T key) {
        int low = 0;
        int high = arr.length - 1;
        while(low <= high) {
            int mid = (low + high) / 2;
            T midVal = arr[mid];
            if(midVal.compareTo(key) < 0) {
                low = mid + 1;
            } else if(midVal.compareTo(key) > 0) {
                high = mid - 1;
            } else {
                return mid;
            }
        }
        return -1;
    }
}

class OperationAdapter implements ScoreOperation {
    private QuickSort sortObj;
    private BinarySearch searchObj;

    public OperationAdapter() {
        sortObj = new QuickSort();
        searchObj = new BinarySearch();
    }

    public <T extends Comparable<T>> T[] sort(T[] arr) {
        return sortObj.sort(arr);
    }

    public <T extends Comparable<T>> int search(T[] arr, T key) {
        return searchObj.search(arr, key);
    }
}

class Test{
    public static void main(String args[]) {
        ScoreOperation operation = new OperationAdapter();
        Integer[] source = {84,76,50,69,90,91,88,96};

        System.out.println("The sorting result: ");
        Integer[] result = operation.sort(source);
        for(Integer item : result) {
            System.out.print(item + " ");
        }

        System.out.println("\nThe index of searched key: ");
        int index = operation.search(result, 88);
        System.out.println(index);
    }
}