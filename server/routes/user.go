package routes

import (
	"fmt"
	"net/http"

	"example.com/go-bank-server/models"
	"example.com/go-bank-server/utils"
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
		c.JSON(http.StatusBadRequest, gin.H{"error": "could not parse request data"})
		return
	}

	err = user.Save()

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating user. Email is already in use."})
		return
	}

	userRes := userResponse{
		user.ID,
		user.Email,
	}

	token, err := utils.GenerateToken(user.Email, user.ID)
	fmt.Println(token)

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Error creating JWT.", "err": err})
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "user created", "userData": userRes, "token": token})
}

func getAllUsers(c *gin.Context) {
	users, err := models.GetAllUsers()

	if err != nil {
		fmt.Println(err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "something went wrong"})
	}

	var usersRes []userResponse

	for _, user := range *users {
		u := userResponse{
			user.ID,
			user.Email,
		}

		usersRes = append(usersRes, u)
	}

	c.JSON(http.StatusOK, gin.H{"message": "success", "users": usersRes})
}
