package db

import (
	"database/sql"
	"fmt"

	_ "github.com/mattn/go-sqlite3"
)

var DB *sql.DB

func InitDB() {
	var err error

	fmt.Println("Opening database connection...")
	DB, err = sql.Open("sqlite3", "go-bank.db")

	if err != nil {
		fmt.Println(err)
		panic("could not connect to database")
	}

	fmt.Println("Successfully connected to database.")

	createTables()
}

func createTables() {
	err := createUsersTable()

	if err != nil {
		fmt.Println(err)
	}
}

func createUsersTable() error {
	createUsersTable := `
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		email TEXT NOT NULL UNIQUE,
		password TEXT NOT NULL
	)
`
	_, err := DB.Exec(createUsersTable)

	if err != nil {
		return err
	}

	return err
}
