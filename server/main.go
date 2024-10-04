package main

import (
	"fmt"

	"example.com/go-bank-server/db"
)

func main() {
	db.InitDB()
	fmt.Println("This is the GoBank backend.")
}
