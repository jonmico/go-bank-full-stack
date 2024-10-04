package models

import "example.com/go-bank-server/db"

type User struct {
	ID       int64
	email    string `binding: required`
	password string `binding: required`
}

func (u *User) Save() error {
	query := "INSERT INTO users(email, password) VALUES (?, ?)"

	statement, err := db.DB.Prepare(query)

	if err != nil {
		return err
	}

	defer statement.Close()

	result, err := statement.Exec(u.email, u.password)

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
