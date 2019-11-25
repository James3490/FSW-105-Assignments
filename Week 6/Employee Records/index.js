const Bill = new Employee('Bill', 'Cashier', 2000, 'Part Time')
const Tom = new Employee('Tom', 'Manager', 3500)
const George = new Employee('George', 'District Manager', 5000)

function Employee(name, jobTitle, salary, status = 'Full Time' ) {
this.name = name;
this.jobTitle = jobTitle;
this.salary = salary;
this.status = status;

}
 
console.log(George)

