package routes

import (
	"net/http"

	"example.com/go-bank-server/models"
	"github.com/gin-gonic/gin"
)

type userResponse struct {
	ID    int64  `json:"userId"`
	Email string `json:"email"`
}

func register(c *gin.Context) {
	var user models.User

	err := c.ShouldBindBodyWithJSON(&user)

	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "could not parse request data"})
		return
	}

	err = user.Save()

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "could not create user"})
		return
	}

	userRes := userResponse{
		user.ID,
		user.Email,
	}

	c.JSON(http.StatusCreated, gin.H{"message": "user created", "userData": userRes})
}
