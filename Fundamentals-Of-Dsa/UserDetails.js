//  Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))

// Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

let gender = prompt('Enter the Genter(M Or F):')

if(gender === 'M' || gender === 'm'){
    console.log('Good Morning Sir');
} else if(gender === 'F' || gender === 'f') {
    console.log(`Good Morning Ma'am`);
} else {
    console.log('Wrong Input');
}