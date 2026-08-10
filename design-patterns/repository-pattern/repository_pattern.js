// Model
class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}

// Repository
class UserRepository {
  constructor() {
    this.users = [
      new User(1, "John", "john@gmail.com"),
      new User(2, "Alice", "alice@gmail.com"),
    ];
  }

  findAll() {
    return this.users;
  }

  findById(id) {
    return this.users.find((user) => user.id === id);
  }

  create(user) {
    this.users.push(user);
    return user;
  }

  delete(id) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

// Service
class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  getUsers() {
    return this.userRepository.findAll();
  }

  getUser(id) {
    return this.userRepository.findById(id);
  }

  createUser(user) {
    return this.userRepository.create(user);
  }

  deleteUser(id) {
    this.userRepository.delete(id);
  }
}

// Usage
const repository = new UserRepository();
const service = new UserService(repository);

console.log(service.getUsers());

console.log(service.createUser(new User(3, "Bob", "bob@gmail.com")));

console.log(service.getUser(3));

service.deleteUser(3);

console.log(service.getUsers());
