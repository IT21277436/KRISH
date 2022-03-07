// Lab-05.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include <iostream>
#include "ShapeArea.h"
#include <iomanip>
using namespace std;

struct circle
{
	float radius;
};

struct rectangle
{
	float length;
	float width;
};

struct square
{
	float length;
};

int main()
{
	//declare the struct variables
	struct circle c1;
	struct rectangle r1;
	struct rectangle r2;
	struct square s1;

	//Circle
	cout << "Enter Radius : ";
	cin >> c1.radius;

	//Rectangle
	cout << "Enter Length of Rectangle : ";
	cin >> r1.length;

	cout << "Enter Width of Rectangle : ";
	cin >> r1.width;

	//Yard
	cout << "Enter Length of Yard : ";
	cin >> r2.length;

	cout << "Enter Width of Yard : ";
	cin >> r2.width;

	//Square
	cout << "Enter Length of Square : ";
	cin >> s1.length;

	float Area_Circle, Area_Rectangle, Area_Yard, Area_Suare;

	//Calling functions
	Area_Circle = areaCircle(c1.radius);
	Area_Rectangle = areaRectangle(r1.length, r1.width);
	Area_Yard = areaRectangle(r2.length, r2.width);
	Area_Suare = areaSquare(s1.length);

	float GreenColorArea = Area_Yard - (Area_Circle + Area_Rectangle + Area_Suare);

	cout << "Area of green color area : " << setiosflags(ios::fixed) << setprecision(3) << GreenColorArea << endl;

}
