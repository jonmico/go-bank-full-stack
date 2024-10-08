package models

import "example.com/go-bank-server/db"

type User struct {
	ID       int64
	Email    string `binding:"required"`
	Password string `binding:"required"`
}

func (u *User) Save() error {
	query := "INSERT INTO users(email, password) VALUES (?, ?)"

	statement, err := db.DB.Prepare(query)

	if err != nil {
		return err
	}

	defer statement.Close()

	result, err := statement.Exec(u.Email, u.Password)

	if err != nil {
		return err
	}

	userId, err := result.LastInsertId()

	if err != nil {
		return err
	}

	u.ID = userId

	return err
}

func GetAllUsers() (*[]User, error) {
	query := "SELECT * FROM users"
	rows, err := db.DB.Query(query)

	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var users []User

	for rows.Next() {
		var user User

		err := rows.Scan(
			&user.ID,
			&user.Email,
			&user.Password,
		)

		if err != nil {
			return nil, err
		}

		users = append(users, user)
	}
	return &users, nil
}
