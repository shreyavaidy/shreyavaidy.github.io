# Misrepresentation of Data

* *Dataset used* : 
80 Cereals (https://www.kaggle.com/crawford/80-cereals/data) - also uploaded to this repo <br>
Nutrition data on 80 cereal products. This is simple and interesting data set is a compilation of the nutritional information from 80 cereal boxes compiled. <br>
> "If you like to eat cereal, do yourself a favor and avoid this dataset at all costs. After seeing these data it will never be the same for me to eat Fruity Pebbles again."


* Sketch (static version in repo folder) : https://plot.ly/~shreyavaidy/1/  
A graph of the data visualized added to the repository. (in a misleading manner ofcourse)



* (300-word) Description/Methodology:
  - Obtained the dataset from Kaggle as a .csv file and played around with it. 
  - Used a charting and data visualising tool plot.ly (https://plot.ly/create/) to create the resulting sketch from the data set.
  - Drew a scatter-plot of the entire dataset.
      * Used the x-axis to represent the names of the cereals.
      * Used the y-axis to represent the calories of each of the cereals. Deployed truncation of the y-axis to emphasize the disparities or misleading nature of the values. The range is set to (-50, 750) where as the actual value of calories for all of these cereals fall between the range 50 to 150 (for the size taken). 
      * Positioned the labels of the cereals on the x-axis in the top position, while the values are below. Lay user will feel as though the calorie values of all these cereals is really high and very similar to one another because of this positioning. So if the y-axis is not carefully seen, the data set will look skewed and completely high. 
      * Hid the grid lines that may guide users to see which values belong to which cereal in the respective axes. 
      * The sizes of the points represent the cup size. This overlaps between the cereals while viewing in this range of x and y axes, leading to more confusion.
      * Moreover, the number of cups is variable in the dataset which makes it unreliable as each portion of the cereal when compared to one another is not the accurate value for varying cup sizes. (represented in colors).
      * Also tried to incorporate cumulative distortion in the dataset.
      
