let numbers = [];
let oddNumbers = [];
let evenNumbers = [];

function addNumber(n){
 numbers.push(n);
 render();
}

function sortOne() {
  if(numbers.length === 0)
    return;
  const n = numbers[0];

  let newNumbers = [];
  for(let i = 1; i < numbers.length; i++){
    newNumbers.push(numbers[i]);
  }
  numbers = newNumbers;
  if(n % 2 === 0){
    evenNumbers.push(n);
  } else{
    oddNumbers.push(n);
  }
  render();
}

function sortAll(){
  while(numbers.length > 0){
  sortOne();
 
 }
}

function numberForm () {
  const form = document.createElement(`form`);
  form.innerHTML = `
    <label>
      Add more numbers to count
      <input name="count" type="number" min="1" />
    </label>
    <button type="submit">Add number</button>
    <button type="button" id ="sort-one"> Sort 1</button>
    <button type="button" id ="sort-all"> Sort All</button>
  `;
  form.addEventListener("submit", (event) => {
    event.preventDefault(); 
    const data = new FormData(form);
    const count = data.get("count");
    addNumber(Number(count));
  });
  const sortOneButton = form.querySelector(`#sort-one`);
  sortOneButton.addEventListener("click", () => {
    sortOne();
  });
  const sortAllButton= form.querySelector(`#sort-all`);
  sortAllButton.addEventListener("click", () => {
    sortAll();
  });
  return form;
}

function numList(title, items){
  const section = document.createElement(`section`);

  const h2 = document.createElement(`h2`);
  h2.textContent = title;
  const ul = document.createElement(`ul`);
  for(let item of items){
    const li = document.createElement(`li`);
    li.textContent = item;
    ul.append(li);
  }
  section.append(h2, ul);
  return section;  
}

function render () {
  const main = document.querySelector(`main`);
  
  main.innerHTML = "";
  const h1 = document.createElement(`h1`);
  h1.textContent = `Odds and Events`;
  const form = numberForm();

  const numberBank =numList(`Number Bank`, numbers);
  const odds =numList(`Odds`, oddNumbers);
  const evens =numList(`Evens`, evenNumbers);

  main.append(h1, form, numberBank, odds, evens);
  console.log(`FINAL HTML`, main.innerHTML);
}
 render();
  
  



 




  

  