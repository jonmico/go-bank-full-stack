package db

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

var DB *sql.DB

func InitDB() {
	var err error

	DB, err = sql.Open("sqlite3", "go-bank.db")

	if err != nil {
		fmt.Println(err)
		panic("could not connect to database")
	}

	createTables()
}

func createTables() {
	createUsersTable := `
		CREATE TABLE IF NOT EXISTS users (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			email TEXT NOT NULL UNIQUE,
			password TEXT NOT NULL
		)
	`

	_, err := DB.Exec(createUsersTable)

	if err != nil {
		fmt.Println(err)
		panic("could not create users table")
	}
}
