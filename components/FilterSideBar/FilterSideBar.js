// components/FilterSidebar.js
// components/FilterSidebar.js
import { useState } from 'react';

export default function FilterSidebar({ seasons, dietaryPreferences, meals, onFilterChange }) {
  const [selectedSeasons, setSelectedSeasons] = useState([]);
  const [selectedDietaryPreferences, setSelectedDietaryPreferences] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState([]);

  const handleSeasonChange = (event) => {
    const season = event.target.value;
    let updatedSelectedSeasons = [...selectedSeasons];

    if (selectedSeasons.includes(season)) {
      updatedSelectedSeasons = selectedSeasons.filter((s) => s !== season);
    } else {
      updatedSelectedSeasons.push(season);
    }

    setSelectedSeasons(updatedSelectedSeasons);
    onFilterChange({ seasons: updatedSelectedSeasons, dietaryPreferences: selectedDietaryPreferences, meals: selectedMeals });
  };

  const handleDietaryPreferenceChange = (event) => {
    const dietaryPreference = event.target.value;
    let updatedSelectedDietaryPreferences = [...selectedDietaryPreferences];

    if (selectedDietaryPreferences.includes(dietaryPreference)) {
      updatedSelectedDietaryPreferences = selectedDietaryPreferences.filter((dp) => dp !== dietaryPreference);
    } else {
      updatedSelectedDietaryPreferences.push(dietaryPreference);
    }

    setSelectedDietaryPreferences(updatedSelectedDietaryPreferences);
    onFilterChange({ seasons: selectedSeasons, dietaryPreferences: updatedSelectedDietaryPreferences, meals: selectedMeals });
  };

  const handleMealChange = (event) => {
    const meal = event.target.value;
    let updatedSelectedMeals = [...selectedMeals];

    if (selectedMeals.includes(meal)) {
      updatedSelectedMeals = selectedMeals.filter((m) => m !== meal);
    } else {
      updatedSelectedMeals.push(meal);
    }

    setSelectedMeals(updatedSelectedMeals);
    onFilterChange({ seasons: selectedSeasons, dietaryPreferences: selectedDietaryPreferences, meals: updatedSelectedMeals });
  };

  return (
    <div>
      <h4>Filter By Seasons</h4>
      <div className='checkbox'>
        {seasons.map((season) => (
          <label key={season}>
            <input
              type="checkbox"
              value={season}
              checked={selectedSeasons.includes(season)}
              onChange={handleSeasonChange}
            />
            {season}
          </label>
        ))}
      </div>

      <h4>Filter By Dietary Preferences</h4>
      <div className='checkbox'>
        {dietaryPreferences.map((dietaryPreference) => (
          <label key={dietaryPreference}>
            <input
              type="checkbox"
              value={dietaryPreference}
              checked={selectedDietaryPreferences.includes(dietaryPreference)}
              onChange={handleDietaryPreferenceChange}
            />
            {dietaryPreference}
          </label>
        ))}
      </div>

      <h4>Filter By Meals</h4>
      <div className='checkbox'>
        {meals.map((meal) => (
          <label key={meal}>
            <input
              type="checkbox"
              value={meal}
              checked={selectedMeals.includes(meal)}
              onChange={handleMealChange}
            />
            {meal}
          </label>
        ))}
      </div>
      <style jsx>{`
        .checkbox{
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      `}</style>
    </div>
  );
}
