package main

import (
	"fmt"

	"example.com/go-bank-server/db"
	"example.com/go-bank-server/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	db.InitDB()
	server := gin.Default()
	routes.RegisterRoutes(server)
	server.Run(":3000")
	fmt.Println("This is the GoBank backend.")
}
