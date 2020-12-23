import bcrypt from 'bcryptjs'

// normally we would want to use the aysnc hashing method on actual users/ register forms,
// but since we're importing the data (and there are only three) 
// we're using the HASH SYNC BCRYPT method

const users = [
  {
    name: `Admin User`,
    email: `admin@tester.com`,
    password: bcrypt.hashSync(`123456`, 10),
    isAdmin: true
  },
  {
    name: `Mr User`,
    email: `mruser@tester.com`,
    password: bcrypt.hashSync(`123456`, 10)
  },
  {
    name: `Mrs User`,
    email: `mrsuser@tester.com`,
    password: bcrypt.hashSync(`123456`, 10)
  },
]

export default users