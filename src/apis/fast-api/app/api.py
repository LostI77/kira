import json
import os
from typing import List, Dict, Union, Any
from enum import Enum
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


class AccessRoles(str, Enum):
    admin = "admin",
    store_owner = "store-owner",
    client = "client"

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

class Product(BaseModel):
    name: str
    price: float
    amount: int

class ShoppingCard(BaseModel):
    id: str
    card: List[Product]

@app.get("/api", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}

@app.get("/api/testimonials")
async def read_testimonials():
    file_path = os.path.join(os.getcwd(), "src", "data", "fake-testimonials.json");

    with open(file_path, "r") as file:
        data = json.load(file)

    return { "testimonials_list": data }

@app.get("/api/products")
async def read_products():
    file_path = os.path.join(os.getcwd(), "src", "data", "fake-products.json")

    with open(file_path, "r") as file:
        data = json.load(file)

    return { "products": data }

@app.get("/api/products/{product_name_id}")
async def read_product(product_name_id: str) -> dict:
    return {"product": ""}

@app.get("/api/support")
async def read_support() -> dict:
    return {"support": []}

@app.get("/api/support/{blog_name_id}")
async def read_support_blog(blog_name_id: str):
    return { "support-blog": { "blog-name-id": blog_name_id } }

@app.get("/api/support/cards")
async def read_support_cards():
    file_path = os.path.join(os.getcwd(), "src", "data", "fake-support-cards.json")
    with open(file_path, "r") as file:
        data = json.load(file)

    return { "support_cards": data }

@app.get("/api/users/{user_id}/shopping-card")
async def read_shopping_card_by_id(user_id: str) -> Dict[str, Union[List[Product], Any]]:
    file_path = os.path.join(os.getcwd(), "src", "data", "fake-shopping-card.json")
    with open(file_path, "r") as file:
        data = json.load(file)

    for shopping_card in data:
        if (shopping_card["id"] == user_id):
                return { "shopping_card": shopping_card["card"] }

    raise HTTPException(status_code=404, detail="Shopping card not found")

@app.delete("/api/users/{user_id}/shopping-card")
async def read_and_deleted_product(user_id: str, product_name: str) -> bool | HTTPException:
    file_path = os.path.join(os.getcwd(), "src", "data", "fake-shopping-card.json")

     # Leer el archivo JSON

    try:
        with open(file_path, "r") as file:
            data = json.load(file)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="File not found.")

    # Buscar el carrito del usuario

    user_found = False
    product_found = False

    for shopping_card in data:
        if shopping_card["id"] == user_id:
            user_found = True
            # Filtrar productos y eliminar el deseado
            initial_count = len(shopping_card["card"])
            shopping_card["card"] = [
                product for product in shopping_card["card"] if product["name"] != product_name
            ]

            # Verificar si se eliminó un producto
            if len(shopping_card["card"]) < initial_count:
                product_found = True
                # Guardar los cambios en el archivo
                with open(file_path, "w") as file:
                    json.dump(data, file, indent=4)

                return {"product_deleted": True}

            # Si el producto no se encuentra
            break

    # Si no se encontró el usuario

    if not user_found:
        raise HTTPException(status_code=404, detail="User not found.")

    # Si el producto no se encontró en el carrito del usuario

    if not product_found:
        raise HTTPException(status_code=404, detail="Product not found.")

    return { "product_deleted": False }
