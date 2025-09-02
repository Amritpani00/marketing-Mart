package com.example.grocerystore.repository;

import com.example.grocerystore.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<Product, String> {
}
