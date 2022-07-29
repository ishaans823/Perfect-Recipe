from bs4 import BeautifulSoup
import requests


#collect user preferences
include_ingredients = []
exclude_ingredients = []
include_num = int(input("Enter the number of ingredients you would like to include: "))
for i in range(0, include_num):
    user_in = input(f'Enter ingredient {i + 1}: ')
    include_ingredients.append(user_in)
exclude_num = int(input("Enter the number of ingredients you would like to exclude: ")) 
for e in range(0, exclude_num):
    user_in = input(f'Enter ingredient {e + 1}: ')
    exclude_ingredients.append(user_in)

# format and get url
url = 'https://www.allrecipes.com/search/results/?'
max_ingred = (include_num, exclude_num)[include_num < exclude_num]
for i in range(0, max_ingred):
    if include_num > i:
        url = url + "IngIncl=" + include_ingredients[i]
        if i != max_ingred - 1:
            url += '&'
    if exclude_num > i:
        url = url + "IngExcl=" + exclude_ingredients[i]
        if i != max_ingred - 1:
            url += '&'
all_recipes = requests.get(url).text

#Display recipe options
soup = BeautifulSoup(all_recipes, 'lxml')
print("Click on any of the following to get ingredients.")
for recipe in soup.find_all('h3', class_ = 'card__title elementFont__resetHeading'):
    print(recipe.get_text())
    