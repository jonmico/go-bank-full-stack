package main

import (
	"fmt"

	"example.com/go-bank-server/db"
	"github.com/gin-gonic/gin"
)

func main() {
	db.InitDB()
	server := gin.Default()
	server.Run(":3000")
	fmt.Println("This is the GoBank backend.")
}
