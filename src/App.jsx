import React, { Component, act, } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    step: 0, 
    counters: [0],
    active: false,
  }
  addCounter = () => {
    const {counters} = this.state
    counters.push(0)
    this.setState({
      counters: counters
    })
  }
  increaseCount = (index) => {
    const {counters} = this.state
    counters[index] += 1
    this.setState ({
      counters:counters
    })
  }
  decreaseCount = (index) => {
    const {counters} = this.state
    counters[index] -= 1
    this.setState ({
      counters:counters
    })
  }
  render() {
    const {counters,active} = this.state
    const users = [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 28,
        deptNumber: 101,
        city: 'New York',
        state: 'NY',
        salary: '$5000',
      },
      {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 19,
        deptNumber: 101,
        city: 'New York',
        state: 'NY',
        salary: '$800',
      },
      {
        id: 2,
        firstName: 'Jane',
        lastName: 'Smith',
        age: 15,
        deptNumber: 102,
        city: 'Los Angeles',
        state: 'CA',
        salary: '$500',
      },
      {
        id: 3,
        firstName: 'Alice',
        lastName: 'Johnson',
        age: 12,
        deptNumber: 103,
        city: 'Chicago',
        state: 'IL',
        salary: '$0',
      },
      {
        id: 3,
        firstName: 'Alice',
        lastName: 'Johnson',
        age: 18,
        deptNumber: 103,
        city: 'Chicago',
        state: 'IL',
        salary: '$4800',
      }
    ];
  // const [filteredUsers, setFilteredUsers] = useState(users);
    const handleFilter = () => {
      const eligibleUsers = users.filter(user => user.age > 18);
      setFilteredUsers(eligibleUsers);
    };
    return (
      <div className='wrapper container d-flex align-items-center justify-content-evenly'>
      <div className='first_task'>
        <div className="row mt-4">
          <div>
            <button className='btn btn-success' onClick={this.addCounter}>Add counter</button>
            {
              counters.map((item, index) => {
                return <div key={index} className='d-flex align-items-center gap-2'>
                  <button className='btn btn-primary my-2 mx-1' onClick={()=> this.increaseCount(index)}>+</button>
                  <span>{item}</span>
                  <button className='btn btn-danger mx-1' onClick={()=> this.decreaseCount(index)}>-</button>
                </div>
              })
            }
          </div>
        </div>
      </div>
      <div className="second_task mt-4">
        <button className='btn btn-success' onClick={() => this.setState({active: !active})}>Login</button>
        {
          active ? <h1>Welcome</h1> : <h1>Login</h1> 
        }
      </div>
      <div className='mt-4'>
      <button className='btn btn-info' onClick={handleFilter}>Armiyaga qabul qilish</button>
      <table border="1" cellPadding="10" cellSpacing="0" className='mt-2'>
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Dept Number</th>
            <th>City</th>
            <th>State</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.age}</td>
              <td>{user.deptNumber}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    )
  }
}
