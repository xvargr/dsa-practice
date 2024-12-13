package main

import (
	"os"
)

func main() {
	algoName := os.Args[1]

	var res string

	switch algoName {
	case "qs":
		res = Qs()

	}

}
