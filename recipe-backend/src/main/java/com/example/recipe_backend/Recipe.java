
// src/main/java/com/example/recipebackend/Recipe.java

package com.example.recipe_backend;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.List;
import java.util.Map;

@Data
@Document(collection = "recipes")
public class Recipe {

    @Id
    private String id;

    @JsonProperty("title")
    private String title;

    @JsonProperty("cuisine")
    private String cuisine;

    @JsonProperty("description")
    private String description;

    @JsonProperty("ingredients")
    private List<String> ingredients;

    // ---- YAHAN PAR PROBLEM THEEK KI GAYI HAI ----
    // Humne 'instructions' ka type String se List<String> kar diya hai
    @JsonProperty("instructions")
    private List<String> instructions;

    @JsonProperty("total_time")
    private Integer totalTime;

    @JsonProperty("yields")
    private String yields;

    @JsonProperty("rating")
    private Double rating;

    @JsonProperty("URL")
    private String url;

    @JsonProperty("image")
    private String image;

    @JsonProperty("time")
    private Map<String, String> time;

    @JsonProperty("nutrition")
    private Map<String, String> nutrition;

    public String getId() {
        return id;
    }
}