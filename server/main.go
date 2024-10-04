package main

import (
	"example.com/go-bank-server/db"
	"example.com/go-bank-server/routes"
	"github.com/gin-gonic/gin"
)

func main() {
	db.InitDB()
	server := gin.Default()
	routes.RegisterRoutes(server)
	server.Run("localhost:3000")
}
