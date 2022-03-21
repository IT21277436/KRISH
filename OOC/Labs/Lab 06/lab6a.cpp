#include <iostream>
#include "Circle.h"
#include "RectangleX.h"
#include "Square.h"
using namespace std;

int main()
{
	double area_circle, area_rectangle, area_yard, area_green, area_square;

	Circle c1;
	c1.setRadius(5);
	area_circle = c1.calcArea();

	RectangleX r1; // yard
	r1.setLength(18);
	r1.setWidth(10);
	area_yard = r1.calcArea();

	RectangleX r2; // rectangle
	r2.setLength(7);
	r2.setWidth(2);
	area_rectangle = r2.calcArea();

	Square s1;
	s1.setLength(4);
	area_square = s1.calcArea();

	area_green = area_yard - (area_circle + area_rectangle + area_square);

	cout << "Area of green color area is " << area_green << endl;
}

