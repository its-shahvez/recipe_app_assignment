

package com.example.recipe_backend;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String> {
    // MongoRepository humein database ke saare basic operations
    // (jaise save, findAll, findById, delete) apne aap de deta hai.
    // Isliye humein is file ke andar kuch bhi likhne ki zarurat nahi hai.
    // Yeh khaali hi rahegi.
}