/**
 * The function takes in an array of objects, iterates through the array, and creates a card for each
 * object. The cards are then combined together and returned as a string
 * @returns The template function is being returned.
 */
// Manager card template
const manager = managerData => {
  return `
  <div id="${managerData.fetch_role()}-card" class="box card">
    <div class="box name-role manager-name">
      <h2>${managerData.fetch_name()}</h2>
      <h3>Role: ${managerData.fetch_role()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${managerData.fetch_ID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${managerData.fetch_email()}">${managerData.fetch_email()}</a></li>
        <li class="list-group-item">Office Number: ${managerData.fetch_officeno()}</li>
      </ul>
    </div>
  </div>
`
}
// Engineer card template
const engineer = Engineer_data => {
  return `
  <div id="${Engineer_data.fetch_role()}-card" class="box card">
    <div class="box name-role engineer-name">
      <h2>${Engineer_data.fetch_name()}</h2>
      <h3>Role: ${Engineer_data.fetch_role()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${Engineer_data.fetch_ID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${Engineer_data.fetch_email()}">${Engineer_data.fetch_email()}</a></li>
        
        <li class="list-group-item">Github:
        <a href="https://www.github.com/${Engineer_data.fetch_github()}" target="_blank">www.github.com/${Engineer_data.fetch_github()}</a>
        </li>
      </ul>
    </div>
  </div>
`
}
// Intern card template
const intern = dataForIntern => {
  return `
  <div id="${dataForIntern.fetch_role()}-card" class="box card">
    <div class="box name-role intern-name">
      <h2>${dataForIntern.fetch_name()}</h2>
      <h3>Role: ${dataForIntern.fetch_role()}</h3>
    </div> 
    <div class="box employee-info">
      <ul class="list-group">
        <li class="list-group-item">ID: ${dataForIntern.fetch_ID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${dataForIntern.fetch_email()}">${dataForIntern.fetch_email()}</a></li>
        <li class="list-group-item">School: ${dataForIntern.getSchool()}</li>
      </ul>
    </div>
  </div>
`
}
// iterates through answers array, creates cards for each team member, then combines all cards together
const sectionEmployee = arrayOfEmployees => {
  let cardEmployee = ''

  for ( i = 0; i < arrayOfEmployees.length; i++ ) {
    if (arrayOfEmployees[i].fetch_role() === "Manager"){
      cardEmployee = cardEmployee + manager(arrayOfEmployees[i])
    }
    if (arrayOfEmployees[i].fetch_role() === "Engineer"){
      cardEmployee = cardEmployee + engineer(arrayOfEmployees[i])
    }
    if (arrayOfEmployees[i].fetch_role() === "Intern"){
      cardEmployee = cardEmployee + intern(arrayOfEmployees[i])
    }
  } return cardEmployee
}
// html page template
const template = data => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Team Profile</title>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
      <link rel="stylesheet" href="./style.css"><source src="../page-template.js" type="page-template">
    </head>
    <body>
      <header class = "container">
        <div class = "flex box justify-center my-team">
          <h1> My Team </h1>
        </div>
      </header>
      <main class = "container">
      ${sectionEmployee(data)}
      </main>
    </body>
  </html>
`
}

module.exports = template;
