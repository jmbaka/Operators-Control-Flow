// Question 3
let Science = "Physics, Chemistry, Biology, Technical Drawing, English, Mathematics";
let SocialScience = "Accounting, Commerce, Marketing, Geography, English, Mathematics";
let Arts = "Government, Economics, Literature, History, English, Mathematics";
let GeneralSubjects = "English, Mathematics";
let classGroup = Arts; // replace with the actual class group

if (classGroup === Science) {
  console.log("Your Science subjects are: " + Arts + " " + GeneralSubjects);
} else if (classGroup === SocialScience) {
  console.log("Your Social Science subjects are: " + SocialScience + " " + GeneralSubjects);
} else if (classGroup === Arts) {
  console.log("Your Arts subjects are: " + Arts + " " + GeneralSubjects );
} else {
  console.log(GeneralSubjects);
};

// In the above program, we first declare the variable classGroup with the value "Arts". Which is Bolatito's class group.

// We then use the if...else conditional statement to check which class group Bolatito belongs to, and print out the corresponding list of subjects using console.log(). If the class group is invalid (i.e. none of the specified options), the program prints out the general subjects.




// Question 2
// What is the result when the following program is executed?

for (let i =1; i < 20; i+= 7) {
  console.log(i);
 };
// When the above program is executed, it will output the following values to the console:
 1
 8
 15
// This is because the for loop initializes the variable i to 1, and then continues looping as long as i is less than 20. In each iteration of the loop, the code block is executed, which includes the statement console.log(i), printing the value of i to the console.

// The loop also increases i by 7 in each iteration, using the expression i += 7. So, the first value printed is 1, then 8 (which is 1 + 7), and finally 15 (which is 8 + 7). Since 15 + 7 is greater than or equal to 20, the loop terminates and the program ends.



// Question 5

function findPowerOfTwo(num) {
  let pwr = 1;
  while (pwr < num) {
    pwr *= 2;
  }
  if (pwr - num > num - pwr/2) {
    pwr /= 2;
  }
  console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
};
// In this program, we define a function called findPowerOfTwo that takes a single argument num. We start by initializing a variable pwr to 1, and then use a while loop to keep doubling the value of pwr until it exceeds num.

// Once the loop completes, we check whether pwr or pwr/2 is closer to num. We do this by checking which of the two numbers (pwr - num or num - pwr/2) has a smaller absolute value. If pwr - num is greater, we divide pwr by 2.

// Finally, we use console.log() to print the resulting value of pwr to the console in the required format.

// For example, if we call the function with num = 40, the program will output:

"The number 32 is the power of 2 nearest to 40."

// If we call the function with num = 50, the program will output:

"The number 64 is the power of 2 nearest to 50."



