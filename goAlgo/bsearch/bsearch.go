package main

import "fmt"

func bSearch(arr []int, target int, from ...int) int {
	var lo, hi int
	if len(from) == 2 {
		lo, hi = from[0], from[1]
	} else {
		lo, hi = 0, len(arr)-1
	}

	if hi < lo {
		return -1
	}

	mid := (hi-lo+1)/2 + lo
	if arr[mid] == target {
		return mid
	}

	var l, r int
	if arr[mid] > target {
		l, r = lo, mid-1
	} else {
		l, r = mid+1, hi
	}
	return bSearch(arr, target, l, r)
}

func main() {
	inp := []int{1, 3, 4, 7, 8, 10, 12, 14, 15, 18, 20, 22, 25, 27, 30}
	fmt.Printf("3 is at index %d\n", bSearch(inp, 3))
	fmt.Printf("10 is at index %d\n", bSearch(inp, 10))
	fmt.Printf("25 is at index %d\n", bSearch(inp, 25))
	fmt.Printf("30 is at index %d\n", bSearch(inp, 30))
	fmt.Printf("1 is at index %d\n", bSearch(inp, 1))
}
