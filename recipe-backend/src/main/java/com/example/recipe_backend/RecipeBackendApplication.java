package com.example.recipe_backend;





import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.io.ClassPathResource;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@SpringBootApplication
public class RecipeBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(RecipeBackendApplication.class, args);
	}

	@Bean
	CommandLineRunner runner(RecipeRepository repository) {
		return args -> {
			if (repository.count() == 0) {
				System.out.println(">>> Database is empty. Loading data from JSON file...");

				ObjectMapper mapper = new ObjectMapper();
				// Agar JSON mein koi extra field ho jo hamare Recipe.java mein nahi hai, to use ignore kar do.
				mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

				// ---- YAHAN PAR AAKHIRI FIX KIYA GAYA HAI ----
				// Yeh line 'NaN' (Not a Number) ko allow karegi
				mapper.configure(JsonParser.Feature.ALLOW_NON_NUMERIC_NUMBERS, true);
				// ---------------------------------------------

				InputStream inputStream = new ClassPathResource("US_recipes.json").getInputStream();

				System.out.println(">>> Reading JSON map from file...");
				Map<String, Recipe> recipeMap = mapper.readValue(inputStream, new TypeReference<Map<String, Recipe>>() {});

				List<Recipe> recipes = new ArrayList<>(recipeMap.values());

				if (!recipes.isEmpty()) {
					System.out.println(">>> Saving " + recipes.size() + " recipes to the database...");
					repository.saveAll(recipes);
					System.out.println(">>> SUCCESS! Data loading complete! " + repository.count() + " recipes saved.");
				} else {
					System.out.println(">>> Could not extract recipes from the JSON map.");
				}

			} else {
				System.out.println(">>> Database already contains " + repository.count() + " recipes. Skipping data load.");
			}
		};
	}
}