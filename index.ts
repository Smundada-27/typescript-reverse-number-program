function reverse_a_number(number)
{
	number = number + "";
	return number.split("").reverse().join("");
}
console.log(reverse_a_number(32243));
console.log(reverse_a_number(1234));