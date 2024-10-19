package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

// Estructura del producto
type Product struct {
	Name   string  `json:"name"`
	Price  float64 `json:"price"`
	Amount int     `json:"amount"`
}

// Estructura de shopping card
type ShoppingCard struct {
	ID   string    `json:"id"`
	Card []Product `json:"card"`
}

// Datos simulados (reemplaza con tu lógica de JSON)
var shoppingData = []ShoppingCard{
	{ID: "user_1", Card: []Product{
		{Name: "Wireless Headphones", Price: 99.99, Amount: 2},
		{Name: "Gaming Mouse", Price: 39.99, Amount: 1},
	}},
}

// Ruta para obtener los productos de un usuario
func getShoppingCard(c *gin.Context) {
	userID := c.Param("user_id")
	for _, card := range shoppingData {
		if card.ID == userID {
			c.JSON(http.StatusOK, card)
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
}

// Ruta para eliminar un producto del carrito
func deleteProduct(c *gin.Context) {
	userID := c.Param("user_id")
	productName := c.Param("product_name")

	for i, card := range shoppingData {
		if card.ID == userID {
			for j, product := range card.Card {
				if product.Name == productName {
					// Eliminar producto
					shoppingData[i].Card = append(shoppingData[i].Card[:j], shoppingData[i].Card[j+1:]...)
					c.JSON(http.StatusOK, gin.H{"message": "Product deleted"})
					return
				}
			}
			c.JSON(http.StatusNotFound, gin.H{"error": "Product not found"})
			return
		}
	}
	c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
}

func main() {
	r := gin.Default()

	// Rutas de la API
	r.GET("/api/users/:user_id/shopping-card", getShoppingCard)
	r.DELETE("/api/users/:user_id/shopping-card/:product_name", deleteProduct)

	// Iniciar servidor
	r.Run(":8080")
}
