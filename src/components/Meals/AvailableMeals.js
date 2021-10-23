import React, { useEffect, useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch(
      'https://react-http-cbf50-default-rtdb.europe-west1.firebasedatabase.app/meals.json',
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        const loadedMeals = [];

        for (const key in data) {
          loadedMeals.push(
            {
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price
          }
          )
        }

        setMeals(loadedMeals);
      });
  }, []);

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.name}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
