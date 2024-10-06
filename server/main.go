package main

import (
	"example.com/go-bank-server/db"
	"example.com/go-bank-server/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	db.InitDB()
	server := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	server.Use(cors.New(config))

	routes.RegisterRoutes(server)
	server.Run("localhost:3000")
}
