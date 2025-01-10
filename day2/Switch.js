const day = prompt("Enter a day of the week:");
switch (day) {
  case 'monday'|| 'tuesday':{
    console.log('Football');}
    break;
  case 'wednesday'||'thursday':{
   console.log('Cricket');}
    break;
  case 'friday':{
    console.log('Volleyball');}
    break;
  case 'saturday':{
    console.log('Basketball');}
    break;
    case 'sunday':{
      console.log('Holiday');
    }break;
  default:{
    console.log('Invalid day entered.Please enter a valid day of the week.');}
    break;
}

