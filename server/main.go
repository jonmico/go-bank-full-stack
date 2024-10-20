package main

import (
	"log"

	"example.com/go-bank-server/db"
	"example.com/go-bank-server/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()

	if err != nil {
		log.Fatalf("failed to load environment variables: %v", err)
	}

	db.InitDB()
	server := gin.Default()

	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:5173"}
	server.Use(cors.New(config))

	routes.RegisterRoutes(server)
	server.Run("localhost:3000")
}
