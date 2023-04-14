// Manager card template
const manager = managerData => {
    return `
    <div id="${managerData.getRole()}-card" class="box card">
      <div class="box name-role manager-name">
        <h2>${managerData.getName()}</h2>
        <h3>Role: ${managerData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">ID: ${managerData.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${managerData.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
  `
  }
  // Engineer card template
  const engineer = engineerData => {
    return `
    <div id="${engineerData.getRole()}-card" class="box card">
      <div class="box name-role engineer-name">
        <h2>${engineerData.getName()}</h2>
        <h3>Role: ${engineerData.getRole()}</h3>
      </div> 
      <div class="box employee-info">
        <ul class="list-group">
          <li class="list-group-item">ID: ${engineerData.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></li>
          
          <li class="list-group-item">Github:
          <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
          </li>
        </ul>
      </div>
    </div>
    `
}