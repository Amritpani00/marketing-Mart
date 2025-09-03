package com.example.grocerystore.util;

import com.example.grocerystore.model.Product;
import com.example.grocerystore.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        if (productRepository.count() == 0) {
            Product apple = new Product();
            apple.setName("Apple");
            apple.setDescription("A crisp, sweet apple.");
            apple.setPrice(0.50);
            apple.setImageUrl("https://images.unsplash.com/photo-1560806887-1e4cd0b69665?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

            Product banana = new Product();
            banana.setName("Banana");
            banana.setDescription("A ripe, yellow banana.");
            banana.setPrice(0.25);
            banana.setImageUrl("https://images.unsplash.com/photo-1571771894824-c8fdc9fe4252?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

            Product milk = new Product();
            milk.setName("Milk");
            milk.setDescription("A carton of fresh milk.");
            milk.setPrice(2.50);
            milk.setImageUrl("https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=2914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

            Product bread = new Product();
            bread.setName("Bread");
            bread.setDescription("A loaf of fresh bread.");
            bread.setPrice(3.00);
            bread.setImageUrl("https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

            productRepository.saveAll(Arrays.asList(apple, banana, milk, bread));
        }
    }
}
