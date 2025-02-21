---
title: Error Handling
---

# Error Handling

Gorim use panic & recover middleware to handle errors, so you can use `errors.Raise` to handle errors and return appropriate responses **directly from any line of your code**.

So your code will be more clean and readable. 

Thanks to [RecoverMiddleware](/middleware.md#recovermiddleware).

Lets say we have a function that check wallet balance in `myproject/wallet/utils.go`:
```go
import (
	"gorim.org/gorim/errors"
)

func CheckBalance(walletID string) int {
	balance, err := db.GetBalance(walletID)
	if err != nil {
        // it will stop the request and return 500 status code
		errors.Raise(&errors.InternalServerError{
			Message: "Failed to get balance",
		})
	}
    return balance
}
```