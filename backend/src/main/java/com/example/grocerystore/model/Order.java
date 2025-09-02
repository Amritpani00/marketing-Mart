package com.example.grocerystore.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

import java.util.List;

@Data
@Document(collection = "orders")
public class Order {
    @Id
    private String id;
    private String userId;
    private List<Product> products;
    private double totalAmount;
    private String status; // e.g., PENDING, PROCESSING, SHIPPED, DELIVERED
}
