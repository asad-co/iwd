// const inp = document.querySelectorAll('.chosen-value');
// const dd = document.querySelectorAll('.value-list');
const dropdown = document.getElementById('service')
const inputField = document.getElementById('serviceInput')
const dropdown1 = document.getElementById('city')
const inputField1 = document.getElementById('cityInput')
let valueArray = [];
const dropdownArray = [... document.querySelectorAll('li')];
console.log(typeof dropdownArray)

const closeDropdown = () => {
  dropdown.classList.remove('open');
  dropdown1.classList.remove('open');
}



//dropdown.classList.add('open');
//inputField.focus(); // Demo purposes only
dropdownArray.forEach(item => {
  valueArray.push(item.textContent);
});


inputField.addEventListener('input', () => {
  dropdown.classList.add('open');
  let inputValue = inputField.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray[j].classList.add('closed');
      } else {
        dropdownArray[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray.length; i++) {
      dropdownArray[i].classList.remove('closed');
    }
  }
});

dropdownArray.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField.value = item.textContent;
    dropdownArray.forEach(dropdown => {
      dropdown.classList.add('closed');
    });
  });
})

inputField.addEventListener('focus', () => {
   inputField.placeholder = 'Type to filter';
   dropdown.classList.add('open');
   dropdownArray.forEach(dropdown => {
     dropdown.classList.remove('closed');
   });
});

inputField.addEventListener('blur', () => {
   inputField.placeholder = 'Select city';
  dropdown.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown = dropdown.contains(evt.target);
  const isInput = inputField.contains(evt.target);
  if (!isDropdown && !isInput) {
    dropdown.classList.remove('open');
  }
});


//////


//dropdown1.classList.add('open');
//inputField1.focus(); // Demo purposes only
dropdownArray.forEach(item => {
  valueArray.push(item.textContent);
});


inputField1.addEventListener('input', () => {
 dropdown1.classList.add('open');
  let inputValue = inputField1.value.toLowerCase();
  let valueSubstring;
  if (inputValue.length > 0) {
    for (let j = 0; j < valueArray.length; j++) {
      if (!(inputValue.substring(0, inputValue.length) === valueArray[j].substring(0, inputValue.length).toLowerCase())) {
        dropdownArray[j].classList.add('closed');
      } else {
        dropdownArray[j].classList.remove('closed');
      }
    }
  } else {
    for (let i = 0; i < dropdownArray.length; i++) {
      dropdownArray[i].classList.remove('closed');
    }
  }
});

dropdownArray.forEach(item => {
  item.addEventListener('click', (evt) => {
    inputField1.value = item.textContent;
    dropdownArray.forEach(dropdown => {
     dropdown1.classList.add('closed');
    });
  });
})

inputField1.addEventListener('focus', () => {
   inputField1.placeholder = 'Type to filter';
  dropdown1.classList.add('open');
   dropdownArray.forEach(dropdown => {
    dropdown1.classList.remove('closed');
   });
});

inputField1.addEventListener('blur', () => {
   inputField1.placeholder = 'Select a service';
 dropdown1.classList.remove('open');
});

document.addEventListener('click', (evt) => {
  const isDropdown =dropdown1.contains(evt.target);
  const isInput = inputField1.contains(evt.target);
  if (!isDropdown && !isInput) {
   dropdown1.classList.remove('open');
  }
});


