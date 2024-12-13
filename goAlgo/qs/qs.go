package main

import (
	"fmt"
	"math/rand/v2"
)

func qs(arr *[]int) {
	length := len(*arr) //17
	if length < 2 {
		return
	}
	mid := part(arr) //16
	l, r := (*arr)[:mid], (*arr)[mid+1:length]
	fmt.Println(l, r)
	qs(&l)
	qs(&r)
}

func part(arrPtr *[]int) int {
	arr, end := *arrPtr, len(*arrPtr)-1
	pivot := rand.IntN(end + 1)
	swap(&arr, pivot, end)
	i := -1
	for j := 0; j < len(arr); j++ {
		if arr[j] >= arr[len(arr)-1] {
			continue
		}
		i++
		swap(&arr, i, j)
	}
	i++
	swap(&arr, i, end)
	return i
}

func swap(arr *[]int, a int, b int) {
	(*arr)[a], (*arr)[b] = (*arr)[b], (*arr)[a]
}

func main() {
	inp := []int{7, 4, 7, 9, 0, 1, 2, 8, 45, 3, 54, 5, 3, 4, 7, 1, 0}
	qs(&inp)
	fmt.Println("final:", inp)
}
