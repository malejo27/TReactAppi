package com.example.demo.repo;
import com.example.demo.models.*;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface ProyectoRepo extends MongoRepository<Proyecto, String> {
    
}
